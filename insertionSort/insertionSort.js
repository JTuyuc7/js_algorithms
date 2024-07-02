/*
* Store the first element as the smallest value you've seen so far
* Compare this item to the next item in the array until you find a smaller number
* If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array
* If the "minimum" is not the value (index) you initially began with, swap the two values
* Repeat this with the next element until the array is sorted
*/

function insertionSort(arr){
  for(var i = 1; i < arr.length; i++){
    let current = arr[i]
    for(var j = i - 1; j >= 0 && arr[j] > current; j--){
      arr[j+1] = arr[j]
    }
    arr[j+1] = current
  }
  return arr
}

insertionSort([10, 20, 5, 9, 78, 45, 13, 56])

// Time Complexity: O(n^2)
// Space Complexity: O(1)
// * Best Case: O(n) when the array is already sorted
// * Worst Case: O(n^2) when the array is sorted in reverse order
// * Average Case: O(n^2) when the array is sorted in reverse order

