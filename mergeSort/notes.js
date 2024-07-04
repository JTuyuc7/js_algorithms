// ^ Intermediate sorting algorithm

// ^ Objectives
// * Understand the limitations of the sorting algorithms we've learned so far
// * Implement merge sort
// * Implement quick sort
// * Implement radix sort

// ^ Why learn this?
// * The sorting algorithms we've learned so far don't scale well

// ^ Faster sorts
// * There is a family of sorting algorithms that can improve time complexity from O(n^2) to O(n log n)
// * There's a tradeoff between efficiency and simplicity

// ^ Merge Sort
// * It's a combination of two things - merging and sorting!
// * Exploits the fact that arrays of 0 or 1 element are always sorted
// * Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

// ^ How does it work?

// * We assume that we have two sorted arrays

// * In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
// * Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
// * This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it

