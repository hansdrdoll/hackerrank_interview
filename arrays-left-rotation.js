/* eslint indent: */

const array = [1, 2, 3, 4, 5];


function rotLeft(a, d) {
    while (d > 0) {
        const first = a.shift();
        a.push(first);
        d--;
    }
    return a;
}

console.log(rotLeft(array, 2));
