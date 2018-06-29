// since n will always be between 1 and 10^5,
// and arr[i] will always be between 1 and n,
// and the spirit of the question implies there will
// be only whole integers (no random floats),
// I assume arr will always start with 1 and end with n


// both should return 3
const arr0 = [4, 3, 1, 2];
const arr1 = [2, 3, 4, 1, 5];

function minimumSwaps(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 === arr[i + 1]) count += 1;
  }
  return arr.length - count;
}

console.log(minimumSwaps(arr0));
console.log(minimumSwaps(arr1));
