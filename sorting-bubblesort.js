// function countSwaps(a) {
//     let swapsCounter = 0;
//     let lastSortedIndex = a.length - 1;
//     let isSorted = false;

//     while (!isSorted) {
//         isSorted = true;
//         for (let i = 0; i <= lastSortedIndex; i++) {
//             if (a[i] > a[i + 1]) {
//                 let temp = a[i];
//                 a[i] = a[i + 1];
//                 a[i + 1] = temp;
//                 isSorted = false;
//                 swapsCounter += 1;
//             }
//             lastSortedIndex -= 1;
//         }
//     }
//     return `Array is sorted in ${swapsCounter} swaps. \nFirst Element: ${a[0]}\nLast Element: ${a[a.length - 1]}`;
// }

function countSwaps(a) {
    let swapsCounter = 0;
    let lastSortedIndex = a.length - 1;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < lastSortedIndex; j++) {
            if (a[j] > a[j + 1]) {
                const temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                swapsCounter += 1;
            }
        }
    }
    return `Array is sorted in ${swapsCounter} swaps. \nFirst Element: ${a[0]}\nLast Element: ${a[a.length - 1]}`;
}

console.log(countSwaps([6, 4, 1]));
