/*
Radix Sort Helper - mostDigits
Implement a function called mostDigits  which accepts an array of integers and returns a count of the number of digits for the number in the array with the most digits.

It may help to use your digitCount  code from the previous exercise in this function.
*/

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

mostDigits([1, 9, 10, 100, 99]); // 3
mostDigits([100, 1010, 1, 500]); // 4
mostDigits([0, 100000, 400, 12, 8]); // 6
mostDigits([]); // 0