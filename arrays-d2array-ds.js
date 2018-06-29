/* eslint indent: */
/* eslint comma-dangle: */
// hourglass pattern 0, 1, 2, 7, 12, 13, 14
const arr1 = [ 
    1, 1, 1, 0, 0, 0,
    0, 1, 0, 0, 0, 0,
    1, 1, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0
];

const arr2 = [
    1, 1, 1, 0, 0, 0,
    0, 1, 0, 0, 0, 0,
    1, 1, 1, 0, 0, 0,
    0, 0, 2, 4, 4, 0,
    0, 0, 0, 2, 0, 0,
    0, 0, 1, 2, 4, 0
];

const arr3 = [1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,9,2,-4,-4,0,0,0,0,-2,0,0,0,0,-1,-2,-4,0]

const arr4 = [-1, -1, 0, -9, -2, -2,
    -2, -1, -6, -8, -2, -5,
    -1, -1, -1, -2, -3, -4,
    -1, -9, -2, -4, -4, -5,
    -7, -3, -3, -2, -9, -9,
    -1, -3, -1, -2, -4, -5]

const arr5 = [
    [3, 7, -3, 0, 1, 8],
    [1, -4, -7, -8, -6, 5],
    [-8, 1, 3, 3, 5, 7],
    [-2, 4, 3, 1, 2, 7],
    [2, 4, -5, 1, 8, 4],
    [5, -7, 6, 5, 2, 8]
    ]

const hourglassSum = function main(arr) {
    // start with the value of the first hourglass
    const xAxis = arr[0].length - 2;
    const yAxis = arr.length - 2;

    // const firstHourglass = [
    //         arr[0][0], arr[0][1], arr[0][2],
    //         arr[1][1],
    //         arr[2][0], arr[2][1], arr[2][2]
    //     ];
    let result = -Infinity;

    // then check every other possible "hourglass" shape in the array
    for (let x = 0; x < xAxis; x++) {
        for (let y = 0; y < yAxis; y++) {
            const hourglass = [
                arr[x][y], arr[x][y + 1], arr[x][y + 2],
                arr[x + 1][y + 1],
                arr[x + 2][y], arr[x + 2][y + 1], arr[x + 2][y + 2]
            ];
            const sum = hourglass.reduce((a, b) => a + b);
            if (sum > result) result = sum;
        }
    }
    return result;
};

console.log(hourglassSum(arr5));
