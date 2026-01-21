export const problems = [
    // {
    //     id: 'problem1',
    //     title: 'Problem 1',
    //     description:
    //         'Log positive numbers starting at 2019, counting down by 8.',
    //     funcName: 'countDownBy8',
    //     tests: [
    //         {
    //             input: [],
    //             expected:
    //                 '2019 2011 2003 1995 1987 1979 1971 1963 1955 1947 1939 1931 1923 1915 1907 1899 1891 1883 1875 1867 1859 1851 1843 1835 1827 1819 1811 1803 1795 1787 1779 1771 1763 1755 1747 1739 1731 1723 1715 1707 1699 1691 1683 1675 1667 1659 1651 1643 1635 1627 1619 1611 1603 1595 1587 1579 1571 1563 1555 1547 1539 1531 1523 1515 1507 1499 1491 1483 1475 1467 1459 1451 1443 1435 1427 1419 1411 1403 1395 1387 1379 1371 1363 1355 1347 1339 1331 1323 1315 1307 1299 1291 1283 1275 1267 1259 1251 1243 1235 1227 1219 1211 1203 1195 1187 1179 1171 1163 1155 1147 1139 1131 1123 1115 1107 1099 1091 1083 1075 1067 1059 1051 1043 1035 1027 1019 1011 1003 995 987 979 971 963 955 947 939 931 923 915 907 899 891 883 875 867 859 851 843 835 827 819 811 803 795 787 779 771 763 755 747 739 731 723 715 707 699 691 683 675 667 659 651 643 635 627 619 611 603 595 587 579 571 563 555 547 539 531 523 515 507 499 491 483 475 467 459 451 443 435 427 419 411 403 395 387 379 371 363 355 347 339 331 323 315 307 299 291 283 275 267 259 251 243 235 227 219 211 203 195 187 179 171 163 155 147 139 131 123 115 107 99 91 83 75 67 59 51 43 35 27 19 11 3',
    //         },
    //     ],
    // },
    // {
    //     id: 'problem2',
    //     title: 'Problem 2',
    //     description: 'Convert Celsius to Fahrenheit using: F = (9/5 * C) + 32',
    //     funcName: 'celciusToFahrenheit',
    //     tests: [
    //         { input: [0], expected: 32 },
    //         { input: [10], expected: 50 },
    //         { input: [100], expected: 212 },
    //     ],
    // },
    // {
    //     id: 'problem3',
    //     title: 'Problem 3',
    //     description:
    //         'Change all positive numbers in the array to the string "big".',
    //     funcName: 'makeItBig',
    //     tests: [
    //         { input: [-1, 3, 5, -5], expected: [-1, 'big', 'big', -5] },
    //         { input: [2, 4, 6], expected: ['big', 'big', 'big'] },
    //         { input: [-4, 0, 4], expected: [-4, 0, 'big'] },
    //     ],
    // },
    // {
    //     id: 'problem4',
    //     title: 'Problem 4',
    //     description: 'Return a new array where each value has been doubled.',
    //     funcName: 'double',
    //     tests: [
    //         { input: [1, 2, 3], expected: [2, 4, 6] },
    //         { input: [-2, 0, 2], expected: [-4, 0, 4] },
    //         { input: [2, 10, 100], expected: [4, 20, 200] },
    //     ],
    // },
    // {
    //     id: 'problem5',
    //     title: 'Problem 5',
    //     description:
    //         'Count and return the number of array values greater than Y.',
    //     funcName: 'returnArrayCountGreaterThanY',
    //     tests: [
    //         { input: [[2, 3, 5], 4], expected: 1 },
    //         { input: [[2, 3, 5], 1], expected: 3 },
    //         { input: [[4, 10, 15], 10], expected: 1 },
    //         { input: [[4, 10, 15], 20], expected: 0 },
    //     ],
    // },
    // {
    //     id: 'problem6',
    //     title: 'Problem 6',
    //     description:
    //         'Return the sum of all positive integers up to num (inclusive).',
    //     funcName: 'sigma',
    //     tests: [
    //         { input: [3], expected: 6 },
    //         { input: [5], expected: 15 },
    //         { input: [6], expected: 21 },
    //         { input: [8], expected: 36 },
    //     ],
    // },
    // {
    //     id: 'problem7',
    //     title: 'Problem 7',
    //     description:
    //         'Return the product of all positive integers from 1 to num.',
    //     funcName: 'factorial',
    //     tests: [
    //         { input: [3], expected: 6 },
    //         { input: [5], expected: 120 },
    //         { input: [7], expected: 5040 },
    //         { input: [8], expected: 40320 },
    //     ],
    // },
    // {
    //     id: 'problem8',
    //     title: 'Problem 8',
    //     description: 'Swap first and last, second and second-to-last, etc.',
    //     funcName: 'swapTowardCenter',
    //     tests: [
    //         {
    //             input: [true, 42, 'Ada', 2, 'pizza'],
    //             expected: ['pizza', 2, 'Ada', 42, true],
    //         },
    //         {
    //             input: [1, 2, 3, 4, 5, 6],
    //             expected: [6, 5, 4, 3, 2, 1],
    //         },
    //         {
    //             input: ['hi', 'coding', 'dojo', 'fans'],
    //             expected: ['fans', 'dojo', 'coding', 'hi'],
    //         },
    //     ],
    // },
    // {
    //     id: 'problem9',
    //     title: 'Problem 9',
    //     description: 'Sum values from 1 to n that are NOT divisible by 3 or 5.',
    //     funcName: 'threesFives',
    //     tests: [
    //         { input: [10], expected: 22 },
    //         { input: [15], expected: 60 },
    //     ],
    // },
    // {
    //     id: 'problem10',
    //     title: 'Problem 10',
    //     description:
    //         "Sum a number's digits repeatedly until the sum is one digit.",
    //     funcName: 'sumToOne',
    //     tests: [
    //         { input: [35], expected: 8 },
    //         { input: [928], expected: 1 },
    //         { input: [5798], expected: 2 },
    //         { input: [35798], expected: 5 },
    //     ],
    // },
    // {
    //     id: 'problem11',
    //     title: 'Problem 11',
    //     description:
    //         'Return whether a given integer is prime (only divisible by 1 and itself).',
    //     funcName: 'isPrime',
    //     tests: [
    //         { input: [3], expected: true },
    //         { input: [4], expected: false },
    //         { input: [13], expected: true },
    //         { input: [65], expected: false },
    //         { input: [17], expected: true },
    //     ],
    // },
    // {
    //     id: 'problem12',
    //     title: 'Problem 12',
    //     description:
    //         'Retain only array values between min and max (inclusive).',
    //     funcName: 'filterRange',
    //     tests: [
    //         { input: ([1, 3, 5, 7, 10], 4, 8), expected: [5, 7] },
    //         { input: ([1, 3, 5, 7, 10], -1, 4), expected: [1, 3] },
    //         { input: ([2, 4, 3, 5], 2, 6), expected: [4, 3, 5] },
    //         { input: ([2, 4, 3, 5], 0, 4), expected: [2, 3] },
    //         { input: ([6, 2, -3, 5, 7], 3, 8), expected: [6, 5, 7] },
    //     ],
    // },
    {
        id: 'problem13',
        title: 'Coding Challenge 1',
        description:
            "Return a new array with first array's elements followed by second array's elements.",
        funcName: 'arrayConcat',
        tests: [
            {
                input: ([1, 2], [3, 4]),
                expected: [1, 2, 3, 4],
            },
            {
                input: ([1, 2], [3, 4, 5]),
                expected: [1, 2, 3, 4, 5],
            },
            {
                input: ([1, 2, 3], [3, 4, 5, 6]),
                expected: [1, 2, 3, 3, 4, 5, 6],
            },
            {
                input: ([1, 2, 3], [3, 4, 5, 6]),
                expected: [1, 2, 3, 3, 4, 5, 6],
            },
            {
                input: ([1, 2, 3], [3, 4, 5, 6]),
                expected: [1, 2, 3, 3, 4, 5, 6],
            },
        ],
    },
    {
        id: 'problem14',
        title: 'Coding Challenge 2',
        description:
            'Return the second-to-last element. Return null if array is too short.',
        funcName: 'secondToLast',
        tests: [
            { input: [42, true, 4, 'Kate', 7], expected: 'Kate' },
            { input: [42, true, 4, 'Kate', 7, 9], expected: 7 },
            {
                input: [42, true, 4, 'Kate', 7, 9, 'dojo', 'awesome'],
                expected: 'dojo',
            },
            { input: [1], expected: null },
        ],
    },
    {
        id: 'problem15',
        title: 'Coding Challenge 3',
        description: 'Combine two arrays sequentially at alternating indices.',
        funcName: 'zipIt',
        tests: [
            {
                input: ([1, 2], [10, 20, 30, 40]),
                expected: [1, 10, 2, 20, 30, 40],
            },
            {
                input: ([1, 2, 3, 4], [10, 20]),
                expected: [1, 10, 2, 20, 3, 4],
            },
            {
                input: ([1, 2, 3], [10, 20, 30, 40]),
                expected: [1, 10, 2, 20, 3, 30, 4, 40],
            },
            { input: ([1], [10, 20]), expected: [1, 10, 20] },
            { input: ([1, 2, 3], [10]), expected: [1, 10, 2, 3] },
        ],
    },
];
