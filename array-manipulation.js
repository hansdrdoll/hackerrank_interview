// well this is bad for memory
// function arrayManipulation(n, queries) {
//   const arr = new Array(n).fill(0);
//   for (let i = 0; i < queries.length; i++) {
//     for (let x = queries[i][0] - 1; x <= queries[i][1] - 1; x++) {
//       arr[x] += queries[i][2];
//     }
//   }
//   return Math.max(...arr);
// }

function arrayManipulation(n, queries) {
    const arr = new Array(n).fill(0);
    let sum = 0;
    let max = 0;

    for (let i = 0; i < queries.length; i++) {
        const a = queries[i][0];
        const b = queries[i][1];
        const k = queries[i][2];

        arr[a - 1] += k;
        if (b < n) arr[b] -= k;
    }

    for (let i = 0; i < n; i++) {
        sum += arr[i];
        if (max < sum) max = sum;
    }
    return max;
}

const n = 5;
const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];

console.log(arrayManipulation(n, queries));
