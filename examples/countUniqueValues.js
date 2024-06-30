// Count Unique Values
// Implement a function called countUniqueValues, 
// which accepts a sorted array, 
// and counts the unique values in the array.
// There can be negative numbers in the array, 
// but it will always be sorted.

function countUniqueValues(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

function countUniqueValues1(arr) {
  let lookup = {}
  for(let i = 0; i < arr.length; i++) {
    lookup[arr[i]] = (lookup[arr[i]] || 0) + 1
  }
  return Object.keys(lookup).length
}

// console.log(countUniqueValues1([1, 1, 1, 1, 1, 2])) // 2
// console.log(countUniqueValues1([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
// console.log(countUniqueValues1([])) // 0
// console.log(countUniqueValues1([-2, -1, -1, 0, 1])) // 4

