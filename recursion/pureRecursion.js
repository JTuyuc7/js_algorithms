
function collectOddValues(arr) {
  let result = [];

  if (arr.length === 0) return result;

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  return result = result.concat(collectOddValues(arr.slice(1)))
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])) // [1, 3, 5, 7, 9]