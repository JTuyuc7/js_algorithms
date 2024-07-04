
// * Merging array pseudocode
// * Create an empty array, take a look at the smallest values in each input array
// * While there are still values we haven't looked at...
// * If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
// * If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
// * Once we exhaust one array, push in all remaining values from the other array

function merge(arr1, arr2) {
  
  let i = 0;
  let j = 0;

  let results = [];
  while (i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j])
      j++;
    }
  }

  // merge remaining values of arr1
  while(i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  // merge remaining values of arr2
  while(j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
}

//* The while loop above will run until we exhaust one of the arrays
//* The code below will run if arr1 still has values


// console.log(merge([1, 10, 50], [2, 14, 99, 100])) // [1, 2, 10, 14, 50, 99, 100]
// console.log(merge([1, 3, 5], [2, 4, 6])) // [1, 2, 3, 4, 5, 6]
// console.log(merge([1, 3, 5], [2, 4, 6, 8, 10])) // [1, 2, 3, 4, 5, 6, 8, 10]
// console.log(first([1, 3, 5, 7, 9], [2, 4, 6])) // [1, 2, 3, 4, 5, 6, 7, 9]
// console.log(merge([1, 3, 5], [2, 4, 6, 8, 10])) // [1, 2, 3, 4, 5, 6, 8, 10]
// console.log(merge([1, 3, 5, 7, 9], [2, 4, 6])) // [1, 2, 3, 4, 5, 6, 7, 9]
// console.log(first([], [2, 4, 6])) // [2, 4, 6]

// * Merge sort pseudocode
// * Break up the array into halves until you have arrays that are empty or have one element
// * Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// * Once the array has been merged back together, return the merged (and sorted!) array

function mergeSort(arr){
  if(arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}


mergeSort([10, 2, 68, 46, 12, 88, 64, 79, 9]) // [2, 9, 10, 12, 46, 64, 68, 79, 88]

// * Time complexity best
// * O(n log n)

// * Time complexity average
// * O(n log n)

// * Time complexity worst
// * O(n log n)

// * Space complexity
// * O(n)
