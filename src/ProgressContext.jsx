import React, { createContext, useState, useEffect, useCallback } from 'react';
import { supabase } from './supabaseClient';

export const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
    const [progress, setProgress] = useState({});
    const [cheatAttempts, setCheatAttempts] = useState({});
    const [runAttempts, setRunAttempts] = useState({});
    const [loading, setLoading] = useState(true);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [studentName, setStudentName] = useState(null);
    const [problemStartTimes, setProblemStartTimes] = useState({}); // Track when each problem was started
    const [codeCache, setCodeCache] = useState({});

    // Load data from Supabase when student email is set
    const loadStudentData = async (email) => {
        try {
            if (!hasLoaded) {
                setLoading(true);
            }
            setStudentName(email);

            // Load progress
            const { data: progressData, error: progressError } = await supabase
                .from('progress')
                .select('*')
                .eq('student_email', email);

            if (progressError) throw progressError;

            // Convert to object format
            const progressObj = {};
            const runAttemptsObj = {};
            progressData.forEach((item) => {
                progressObj[item.problem_id] = item.status;
                if (item.run_attempts !== undefined && item.run_attempts !== null) {
                    runAttemptsObj[item.problem_id] = item.run_attempts;
                }
            });
            setProgress(progressObj);
            setRunAttempts(runAttemptsObj);

            // Load cheat attempts
            const { data: cheatData, error: cheatError } = await supabase
                .from('cheat_attempts')
                .select('*')
                .eq('student_email', email);

            if (cheatError) throw cheatError;

            const cheatObj = {};
            cheatData.forEach((item) => {
                cheatObj[item.problem_id] = item.attempt_count;
            });
            setCheatAttempts(cheatObj);
            setHasLoaded(true);
        } catch (error) {
            console.error('Error loading student data:', error);
        } finally {
            if (!hasLoaded) {
                setLoading(false);
            }
        }
    };

    // Update student score in students table
    const updateStudentScore = async (email, newScore, newCheatCount) => {
        try {
            const { error } = await supabase
                .from('students')
                .update({
                    score: newScore,
                    cheat_attempts: newCheatCount,
                    last_updated: new Date().toISOString(),
                })
                .eq('email', email);

            if (error) throw error;
        } catch (error) {
            console.error('Error updating student score:', error);
        }
    };

    // 🔧 NEW: Start tracking time for a problem
    const startProblemTimer = useCallback((problemId) => {
        setProblemStartTimes((prev) => {
            // Only set start time if not already set
            if (!prev[problemId]) {
                return { ...prev, [problemId]: Date.now() };
            }
            return prev;
        });
    }, []);

    // 🔧 NEW: Calculate time spent and save to database
    const saveTimeSpent = async (problemId) => {
        if (!studentName || !problemStartTimes[problemId]) return;

        const timeSpentMs = Date.now() - problemStartTimes[problemId];
        const timeSpentSeconds = Math.round(timeSpentMs / 1000); // Convert to seconds
        const timeSpentMinutes = Math.round(timeSpentMs / 60000); // Convert to minutes

        try {
            const { error } = await supabase
                .from('progress')
                .update({
                    time_spent_seconds: timeSpentSeconds,
                    time_spent_minutes: timeSpentMinutes,
                    updated_at: new Date().toISOString(),
                })
                .eq('student_email', studentName)
                .eq('problem_id', problemId);

            if (error) throw error;

            if (timeSpentMinutes < 1) {
                console.log(
                    `Time spent on ${problemId}: ${timeSpentSeconds} seconds`
                );
            } else {
                console.log(
                    `Time spent on ${problemId}: ${timeSpentMinutes} minutes`
                );
            }
        } catch (error) {
            console.error('Error saving time spent:', error);
        }
    };

    // Update progress for a problem
    const updateProgress = async (problemId, score) => {
        if (!studentName) return;

        // 🔧 UPDATED: Only save time spent on FIRST successful attempt
        const wasAlreadySolved = progress[problemId] === 1;
        if (score === 1 && !wasAlreadySolved) {
            await saveTimeSpent(problemId);
        }

        // Update local state immediately
        setProgress((prev) => {
            const newProgress = { ...prev, [problemId]: score };

            // Calculate new total score
            const newTotalScore = Object.values(newProgress).filter(
                (v) => v === 1
            ).length;
            const totalCheats = Object.values(cheatAttempts).reduce(
                (a, b) => a + b,
                0
            );

            // Update students table with new score
            updateStudentScore(studentName, newTotalScore, totalCheats);

            return newProgress;
        });

        try {
            // Update in Supabase
            const { error } = await supabase.from('progress').upsert(
                {
                    student_email: studentName,
                    problem_id: problemId,
                    status: score,
                    updated_at: new Date().toISOString(),
                },
                {
                    onConflict: 'student_email,problem_id',
                }
            );
            if (error) throw error;
        } catch (error) {
            console.error('Error updating progress:', error);
        }
    };

    // Save code to Supabase
    const saveCode = async (problemId, code) => {
        if (!studentName) return;

        try {
            setCodeCache((prev) => ({ ...prev, [problemId]: code }));
            const { error } = await supabase.from('progress').upsert(
                {
                    student_email: studentName,
                    problem_id: problemId,
                    code: code,
                    updated_at: new Date().toISOString(),
                },
                {
                    onConflict: 'student_email,problem_id',
                }
            );
            if (error) throw error;
        } catch (error) {
            console.error('Error saving code:', error);
        }
    };

    // Load code from Supabase
    const loadCode = useCallback(
        async (problemId) => {
            if (!studentName) return null;

            try {
                const { data, error } = await supabase
                    .from('progress')
                    .select('code')
                    .eq('student_email', studentName)
                    .eq('problem_id', problemId)
                    .maybeSingle();

                if (error) {
                    console.error('Error loading code:', error);
                    return null;
                }

                if (data?.code) {
                    setCodeCache((prev) => ({ ...prev, [problemId]: data.code }));
                }
                return data?.code || null;
            } catch (error) {
                console.error('Error loading code:', error);
                return null;
            }
        },
        [studentName]
    );

    // Record cheat attempt for a problem
    const recordCheatAttempt = async (problemId) => {
        if (!studentName) return;

        // Update local state
        setCheatAttempts((prev) => {
            const newCheatAttempts = {
                ...prev,
                [problemId]: (prev[problemId] || 0) + 1,
            };

            // Calculate new total cheat count
            const newTotalCheats = Object.values(newCheatAttempts).reduce(
                (a, b) => a + b,
                0
            );
            const currentScore = Object.values(progress).filter(
                (v) => v === 1
            ).length;

            // Update students table with new cheat count
            updateStudentScore(studentName, currentScore, newTotalCheats);

            return newCheatAttempts;
        });

        try {
            // Get current count
            const { data: existing } = await supabase
                .from('cheat_attempts')
                .select('attempt_count')
                .eq('student_email', studentName)
                .eq('problem_id', problemId)
                .single();

            const newCount = (existing?.attempt_count || 0) + 1;

            // Update in Supabase
            const { error } = await supabase.from('cheat_attempts').upsert(
                {
                    student_email: studentName,
                    problem_id: problemId,
                    attempt_count: newCount,
                    last_attempt: new Date().toISOString(),
                },
                {
                    onConflict: 'student_email,problem_id',
                }
            );
            if (error) throw error;
        } catch (error) {
            console.error('Error recording cheat attempt:', error);
        }
    };

    // Record run attempt for a problem
    const recordRunAttempt = async (problemId) => {
        if (!studentName) return;

        const newCount = (runAttempts[problemId] || 0) + 1;
        setRunAttempts((prev) => ({ ...prev, [problemId]: newCount }));

        try {
            const { error } = await supabase.from('progress').upsert(
                {
                    student_email: studentName,
                    problem_id: problemId,
                    run_attempts: newCount,
                    updated_at: new Date().toISOString(),
                },
                {
                    onConflict: 'student_email,problem_id',
                }
            );
            if (error) throw error;
        } catch (error) {
            console.error('Error recording run attempt:', error);
        }
    };

    // Get cheat attempts for a problem
    const getCheatAttempts = (problemId) => {
        return cheatAttempts[problemId] || 0;
    };

    // Get run attempts for a problem
    const getRunAttempts = (problemId) => {
        return runAttempts[problemId] || 0;
    };

    const getCachedCode = (problemId) => {
        return codeCache[problemId] || null;
    };

    // Get total cheat attempts across all problems
    const totalCheatAttempts = Object.values(cheatAttempts).reduce(
        (a, b) => a + b,
        0
    );

    // Total score
    const totalScore = Object.values(progress).filter((v) => v === 1).length;

    return (
        <ProgressContext.Provider
            value={{
                progress,
                updateProgress,
                totalScore,
                recordCheatAttempt,
                recordRunAttempt,
                getCheatAttempts,
                getRunAttempts,
                totalCheatAttempts,
                cheatAttempts,
                loadStudentData,
                loading,
                hasLoaded,
                studentName,
                saveCode,
                loadCode,
                getCachedCode,
                startProblemTimer, // 🔧 NEW
            }}
        >
            {children}
        </ProgressContext.Provider>
    );
};
