
//^ Radix Sort
// * Radix sort is a special sorting algorithm that works on lists of numbers
// * It never makes comparisons between elements
// * It exploits the fact that information about the size of a number is encoded in the number of digits
// * More digits means a bigger number

// ^ How does it work?

// ^ Radix Sort Helper Functions
// * In order to implement radix sort, it's helpful to build a few helper functions first:
// * getDigit(num, place) - returns the digit in num at the given place value
// * digitCount(num) - returns the number of digits in num
// * mostDigits(nums) - given an array of numbers, returns the number of digits in the largest numbers in the list

// ^ Radix Sort Pseudocode
// * Define a function that accepts a list of numbers