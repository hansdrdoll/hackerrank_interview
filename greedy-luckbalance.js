// make an array of target important contests
// and target unimportant contests
// insert each contest with insertion sort

// function luckBalance(k, contests) {
//     const importantContests = new Array(contests.length).fill(null);
//     const unImportantContests = new Array(contests.length).fill(null);
//     for (let i = 0; i < contests.length; i++) {
//         const luck = contests[i][0];
//         const important = contests[i][1];
//         if (important) {
//             importantContests.splice(luck - 1, 0, contests[i]);
//         } else {
//             unImportantContests.splice(luck - 1, 0, contests[i]);
//         }
//     }

//     let losses = contests.length - k;
//     let luck = 0;
//     for (let i = importantContests.length - 1; i >= 0; i--) {
//         if (importantContests[i]) {
//             if (losses > 0) {
//                 console.log('winning important contest', i, 'with luck:', importantContests[i][0]);
//                 luck += importantContests[i][0];
//                 losses -= 1;
//             } else {
//                 luck -= importantContests[i][0];
//             }
//         }
//     }
//     for (let i = unImportantContests.length - 1; i >= 0; i--) {
//         if (unImportantContests[i]) {
//             if (losses > 0) {
//                 console.log('winning unimportant contest', i, 'with luck:', unImportantContests[i][0]);
//                 luck += unImportantContests[i][0];
//                 losses -= 1;
//             } else {
//                 luck -= unImportantContests[i][0];
//             }
//         }
//     }
//     console.log(luck, 'luck')
//     // console.log('important', importantContests);
//     // console.log('unimportant', unImportantContests);
// }

function luckBalance(k, contests) {
    const sortedContests = contests.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    const importantContests = contests.filter(a => a[1]).length;
    let maxWins = importantContests - k;
    let luck = 0;
    for (let i = 0; i < sortedContests.length; i++) {
        if (maxWins > 0) {
            luck -= sortedContests[i][0];
            maxWins -= 1;
        } else {
            luck += sortedContests[i][0];
        }
    }
    return luck;
}

console.log(luckBalance(2, [[5, 1], [1, 1], [4, 0]]));
console.log(luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]));
