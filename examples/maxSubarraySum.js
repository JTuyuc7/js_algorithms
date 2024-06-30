/* Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
  The function should calculate the maximum sum of n consecutive elements in the array.
*/

function maxSubarraySum(arr, num) { 
  if( arr.length < num ) return null;

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;

}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10

function maxSubarraySum1(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if(arr.length < num) return null;
  for(let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum;
  for(let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

// TODO: write your own solution

