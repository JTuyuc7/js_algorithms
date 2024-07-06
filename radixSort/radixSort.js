
// ^ Radix Pseudocode
// * Define a function that accepts a list of numbers
// * Figure out how many digits the largest number has
// * Loop from k = 0 up to this largest number of digits
// * For each iteration of the loop:
//     * Create buckets for each digit (0 to 9)
//     * Place each number in the corresponding bucket based on its kth digit
// * Replace our existing array with values in our buckets, starting with 0 and going up to 9
// * Return the list at the end!

// Radix Sort

function getDigit(num, idx){
  let numString = num.toString()
  return parseInt(numString[numString.length - (idx + 1)]) ? parseInt(numString[numString.length - (idx + 1)]) : 0
}
// getDigit(12345, 0) // 5
// getDigit(12345, 1) // 4
// getDigit(12345, 2) // 3
// getDigit(12345, 6) // 0

function digitCount(num){
  // return num.toString().length
  if(num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// digitCount(12345) // 5

function mostDigits(arr){
  let max = 0;
  for(let i = 0; i < arr.length; i++){
    if(digitCount(arr[i]) > max ){
      max = digitCount(arr[i])
    }
  }
  return max
}
// mostDigits([1234,56,7]) // 4
// mostDigits([1,1,11111,1]) // 5

function radixSort(arr){
  let maxDigitCount = mostDigits(arr)
  for(let i = 0; i < maxDigitCount; i++){
    let digitBuckets = Array.from({ length: 10}, () => [])
    for(let j = 0; j < arr.length; j++){
      let digit = getDigit(arr[j], i)
      digitBuckets[digit].push(arr[j])
    }
    arr = [].concat(...digitBuckets)
  }
  return arr
}

radixSort([23, 345, 5467, 12, 2345, 9852]) // [12, 23, 345, 2345, 5467, 9852]

// Time complexity:
// * Best: O(nk)
// * Average: O(nk)
// * Worst: O(nk)
// * Where n is the length of the array and k is the number of digits(average) in the number
// * Radix sort is faster than comparison sorts like quickSort or mergeSort
// * It doesn't make comparisons, but rather uses the number of digits to sort the numbers
// * It's great for sorting numbers, but can't be used for sorting strings or other data types
// * It's also not a comparison sort algorithm
// * It's a linear time complexity algorithm
// * It's a stable sorting algorithm
// * It's not an in-place sorting algorithm
// * It's not a comparison sort algorithm
// * It's a non-comparison sort algorithm

