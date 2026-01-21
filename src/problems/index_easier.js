export const problems = [
    // {
    //     id: 'problem1',
    //     title: 'Problem 1',
    //     description:
    //         'Create a function that prints/logs all the integers from 1 to 20.',
    //     funcName: 'print1to20',
    //     tests: [
    //         {
    //             input: [],
    //             expected: '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20',
    //         },
    //     ],
    // },
    // {
    //     id: 'problem2',
    //     title: 'Problem 2',
    //     description:
    //         'Create a function that prints/logs all the odd numbers from 3 to 20.',
    //     funcName: 'printOdd3to20',
    //     tests: [{ input: [], expected: '3 5 7 9 11 13 15 17 19' }],
    // },
    // {
    //     id: 'problem3',
    //     title: 'Problem 3',
    //     description: 'Given an array, return the sum of its numbers.',
    //     funcName: 'findSum',
    //     tests: [
    //         { input: [[1, 2, 3]], expected: 6 },
    //         { input: [[1, 3, 5]], expected: 9 },
    //         { input: [[-1, 2, -3]], expected: -2 },
    //         { input: [[-2, 0, 2]], expected: 0 },
    //     ],
    // },
    // {
    //     id: 'problem4',
    //     title: 'Problem 4',
    //     description: 'Return the maximum number in an array.',
    //     funcName: 'findMax',
    //     tests: [
    //         { input: [[-3, 3, 5, 7]], expected: 7 },
    //         { input: [[-3, 3, 15, 7]], expected: 15 },
    //         { input: [[13, 3, 5, 7]], expected: 13 },
    //         { input: [[0, -3, -5, -7]], expected: 0 },
    //         { input: [[3]], expected: 3 },
    //         { input: [[-1, -3, -5, -7]], expected: -1 },
    //     ],
    // },
    // {
    //     id: 'problem5',
    //     title: 'Problem 5',
    //     description:
    //         'Create a function that prints/logs all the even numbers from 4 to 22.',
    //     funcName: 'printEven4to22',
    //     tests: [{ input: [], expected: '4 6 8 10 12 14 16 18 20 22' }],
    // },
    // {
    //     id: 'problem6',
    //     title: 'Problem',
    //     description: 'Print/log all multiples of 7 between 7 and 62.',
    //     funcName: 'multiplesOf7',
    //     tests: [{ input: [], expected: '7 14 21 28 35 42 49 56' }],
    // },
    // {
    //     id: 'problem7',
    //     title: 'Problem 7',
    //     description:
    //         'Log positive numbers starting at 50, counting down by fives (exclude 0).',
    //     funcName: 'countdownByFives',
    //     tests: [{ input: [], expected: '50 45 40 35 30 25 20 15 10 5' }],
    // },
    {
        id: 'problem8',
        title: 'Coding Challenge 1',
        description: 'Print/log the sum of the first value plus array length.',
        funcName: 'firstPlusLength',
        tests: [
            { input: [[1, 2, 5]], expected: 4 },
            { input: [[3, 0, 2, 5]], expected: 7 },
            { input: [[-5, 0, 2, 5]], expected: -1 },
            { input: [[1]], expected: 2 },
            { input: [[1]], expected: 2 },
        ],
    },
    // {
    //     id: 'problem9',
    //     title: 'Problem 9',
    //     description: 'Print/log each number in the array.',
    //     funcName: 'printArray',
    //     tests: [
    //         { input: [[1, 3, 5]], expected: '1 3 5' },
    //         { input: [[-1, 3, -5]], expected: '-1 3 -5' },
    //         { input: [[1, 2, 3, 4, 5]], expected: '1 2 3 4 5' },
    //     ],
    // },
    // {
    //     id: 'problem10',
    //     title: 'Problem 10',
    //     description: 'Print/log only the positive values.',
    //     funcName: 'printPositives',
    //     tests: [
    //         { input: [[-1, 3, -5, 10]], expected: '3 10' },
    //         { input: [[-1, 3, -5]], expected: '3' },
    //         { input: [[-1, 10, 15]], expected: '10 15' },
    //     ],
    // },
    // {
    //     id: 'problem11',
    //     title: 'Problem 11',
    //     description: 'Print the index of each positive number in an array.',
    //     funcName: 'printPositiveIndex',
    //     tests: [
    //         { input: [[1, 3, -10]], expected: '0 1' },
    //         { input: [[10, 5, -5, 15]], expected: '0 1 3' },
    //         { input: [[10, 5, 5, 15]], expected: '0 1 2 3' },
    //     ],
    // },
    // {
    //     id: 'problem12',
    //     title: 'Problem 12',
    //     description: 'Replace each value with its square.',
    //     funcName: 'squareVal',
    //     tests: [
    //         { input: [[1, 3, 5]], expected: [1, 9, 25] },
    //         { input: [[1, -3]], expected: [1, 9] },
    //         { input: [[0, 2, 4]], expected: [0, 4, 16] },
    //     ],
    // },
    // {
    //     id: 'problem13',
    //     title: 'Problem 13',
    //     description:
    //         'Return a new array with all values except the first, adding 7 to each.',
    //     funcName: 'addSevenToMost',
    //     tests: [
    //         { input: [[1, 3, 5]], expected: [10, 12] },
    //         { input: [[1, 3, 5, 7]], expected: [10, 12, 14] },
    //         { input: [[5, 10, 20]], expected: [17, 27] },
    //     ],
    // },
    {
        id: 'problem14',
        title: 'Coding Challenge 2',
        description: 'Return a new array with two elements: [min, max].',
        funcName: 'findMinMax',
        tests: [
            { input: [[1, 3, 5]], expected: [1, 5] },
            { input: [[-1, 3, 5]], expected: [-1, 5] },
            { input: [[-1, -3, -5]], expected: [-5, -1] },
            { input: [[-1, -3, 10]], expected: [-3, 10] },
        ],
    },
];
