
//^ Searching Algorithms

//? Objectives
//? Describe what a searching algorithm is
//? Implement linear search on arrays
//? Implement binary search on sorted arrays
//? Implement a naive string searching algorithm
//? Implement the KMP string searching algorithm

//^ how do we search?
//* Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.

//^ JavaScript has search methods built in
//* indexOf
//* includes
//* find
//* findIndex

//^ Linear Search
// let's search for 12 in the following array:
// [5,8,1,100,12,3,12]

// ^ Linear Search Pseudocode
//* This function accepts an array and a value
//* Loop through the array and check if the current array element is equal to the value
//* If it is, return the index at which the element is found

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

// console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
// console.log(linearSearch([100], 100)); // 0
// console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1

// ^ Linear Search Big O
// * best case: O(1)
// * average case: O(n)
// * worst case: O(n)


//^ Binary Search
// * Binary search is a much faster form of search
// * Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
// * Binary search only works on sorted arrays!


// ^ Binary Search Pseudocode
//* This function accepts a sorted array and a value
//* Create a left pointer at the start of the array, and a right pointer at the end of the array  
//* While the left pointer comes before the right pointer:
//  * Create a pointer in the middle
//  * If you find the value you want, return the index
//  * If the value is too small, move the left pointer up
//  * If the value is too large, move the right pointer down
//* If you never find the value, return -1

// ^ what about Big O?
// * best case: O(1)
// * average case: O(log n)

// ^ Naive String Search
// * Suppose you want to count the number of times a smaller string appears in a longer string
// * A straightforward approach involves checking pairs of characters individually

// ^ Naive String Search Pseudocode
//* Loop over the longer string
//* Loop over the shorter string
//* If the characters don't match, break out of the inner loop
//* If the characters do match, keep going
//* If you complete the inner loop and find a match, increment the count of matches
//* Return the count













