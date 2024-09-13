/*
Radix Sort
Finally, you're ready to implement Radix Sort! Write a function called radixSort  which accepts an array of numbers and sorts them in ascending order.

You'll need to make use of the helper functions from the previous exercises here. Good luck!
*/

function getDigit(num, i) {
  // using this function may be helpful. good luck!
  return parseInt(String(num).split('').reverse()[i]) || 0
}

function digitCount(num) {
  // using this function may be helpful. good luck
  return String(num).length;
}

function mostDigits(nums) {
  // good luck!
  let max = 0;
  for(let i = 0; i < nums.length; i++){
    max = Math.max(max, digitCount(nums[i]));
  }
  return max;
}

function radixSort(nums) {
  // good luck!
  let maxDigitCount = mostDigits(nums);
  for (let i = 0; i < maxDigitCount; i++){
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++){
      let digit = getDigit(nums[j], i)
      digitBuckets[digit].push(nums[j])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums;
}

radixSort([8, 6, 1, 12]); // [1, 6, 8, 12]
radixSort([10, 100, 1, 1000, 10000000]); // [1, 10, 100, 1000, 10000000]
radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]); 
// [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]