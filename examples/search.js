

function search(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while(min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if(arr[middle] < num) {
      min = middle + 1;
    } else if(arr[middle] > num) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5], 2)) // 1
console.log(search([1, 2, 3, 4, 5], 3)) // 2
console.log(search([1, 2, 3, 4, 5], 5)) // 4
console.log(search([1, 2, 3, 4, 5], 6)) // -1