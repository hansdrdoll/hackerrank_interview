// turn array into hash map
// [
//  {name: 2, moves: 0},
//  {name: 1, moves: 0},
// ]
// give each key a moves counter
// starting from the right,
// check if the left value is > right value
// if it is, subtract index by 1
// and increment move counter by 1
// else check next pair
// continue checking pairs until line is sorted
// or break if any move counter is > 2

/* eslint indent: */

function minimumBribes(q) {

    const queue = [];
    let bribes = 0;

    for (let i = 0; i < q.length; i++) {
        queue.push({ nameTag: q[i], moves: 0 });
    }

    for (let i = 0; i < q.length * 2; i++) {
        for (let i = queue.length - 1; i >= 0; i--) {
            if (queue[i].nameTag > i + 1) {
                const queuee = queue[i];
                if (queuee.moves < 2) {
                    const briber = queue.splice(i, 1);
                    briber[0].moves += 1;
                    queue.splice(i + 1, 0, briber[0]);
                    bribes += 1;
                } else {
                    return 'Too chaotic';
                }
            }
        }
    }
    return bribes;
}

// console.log(minimumBribes([2, 1, 5, 3, 4]));
// console.log(minimumBribes([2, 5, 1, 3, 4]));

// console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]));
// console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));

function minBribes(q) {
    let result = 0;
    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] - (i + 1) > 2) {
            return 'Too chaotic';
        }
        for (let x = Math.max(0, q[i] - 2); x < i; x++) {
            if (q[x] > q[i]) result += 1;
        }
    }
    return result;
}

console.log(minBribes([2, 1, 5, 3, 4]));
console.log(minBribes([2, 5, 1, 3, 4]));
