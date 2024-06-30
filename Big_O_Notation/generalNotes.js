// If you have two nested loops, the outoput is O(n^2)
// If you have two loops, the output is O(n)
// If you have two loops, but one is a nested loop, the output is O(n^2)
// If you have two loops, but they are not nested, the output is O(n)

function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// printAllPairs(5); // O(n^2) - Quadratic Time

// How to simplify Big O Notation
// 1. Constants do not matter
// 2. Smaller terms do not matter
// 3. O(n + 10) -> O(n)
// 4. O(1000n + 50) -> O(n)
// 5. O(n^2 + 5n + 8) -> O(n^2)
// 6. O(n + n + n + n) -> O(n)
// 7. O(1000n + 50) -> O(n)
// 8. O(1) -> O(1)
// 9. O(10) -> O(1)
// 10. O(n^2 + n + 1) -> O(n^2)
// 11. O(n^2 + n) -> O(n^2)
// 12. O(n^2 + n) -> O(n^2)
// 13. O(n + n) -> O(n)
// 14. O(2n) -> O(n)
// 15. O(n/2) -> O(n)
// 16. O(1000) -> O(1)
// 17. O(13n^2) -> O(n^2)
// 18. O(n + log n) -> O(n)

/*
  1. Arithmetic operations are constant
  2. Variable assignment is constant
  3. Accessing elements in an array (by index) or object (by key) is constant
  4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
*/

//! Another example
function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}
// This function is O(n) because it will always run 5 times, even if n is less than 5
// logAtLeast5(10); // O(n)

//! Another example
function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}
// This function is O(1) because it will always run 5 times, even if n is greater than 5
// logAtMost5(10); // O(1) - Constant Time

//! Time Complexity
/*
  * Constant Time: O(1)
  * Logarithmic Time: O(log n)
  * Linear Time: O(n)
  * Linearithmic Time: O(n log n)
  * Quadratic Time: O(n^2)
  * Cubic Time: O(n^3)
  * Exponential Time: O(2^n)
  * Factorial Time: O(n!)
*/

//! Space Complexity in JS
// Most primitives (booleans, numbers, undefined, null) are constant space
// Strings require O(n) space (where n is the string length)
// Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

//! Another example
function sum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
// This function is O(1) because the loop runs n times
// sum([1, 2, 3, 4, 5]); // O(1) - Linear Time

//! Another example
function double(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}
// This function is O(n) because the loop runs n times
// double([1, 2, 3, 4, 5]); // O(n) - Linear Time

//! Logarithms
// Logarithms are the inverse of exponentiation
// log2(8) = 3 -> 2^3 = 8
// log2(value) = exponent -> 2^exponent = value
// log2(8) = 3 -> 2^3 = 8
// log2(16) = 4 -> 2^4 = 16
// log2(32) = 5 -> 2^5 = 32
// log2(64) = 6 -> 2^6 = 64
// log2(128) = 7 -> 2^7 = 128
// log2(256) = 8 -> 2^8 = 256
// log2(512) = 9 -> 2^9 = 512

//! Logarithmic Time Complexity

//* The big o notation for arrays and objects

//^ OBJECTS
// Unonrdered, key-value pairs
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
}

//^ When to use objects
// When you don't need order
// When you need fast access/insertion and removal

//# Big O of Objects
// Insertion - O(1)
// Removal - O(1)
// Searching - O(n)
// Access - O(1)

//^ Big O of Object Methods
// Object.keys - O(n)
// Object.values - O(n)
// Object.entries - O(n)
// hasOwnProperty - O(1)

// console.log(Object.keys(instructor)); // O(n)
// console.log(Object.entries(instructor)); // O(n)

//^ ARRAYS 
// Ordered lists
let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2, "awesome"];

// If you need order, use arrays
// If you need fast access/insertion and removal (sort of...) 

// if you want to insert at the beginning of an array, you have to re-index all the elements
// if you want to insert at the end of an array, it's O(1) because you just add it to the end
// if you want to remove from the beginning of an array, you have to re-index all the elements
// push and pop are always faster than shift and unshift

//# Big O of Arrays methods
// push - O(1)
// pop - O(1)
// shift - O(n)
// unshift - O(n)
// concat - O(n)
// slice - O(n)
// splice - O(n)
// sort - O(n * log n)
// forEach/map/filter/reduce/etc. - O(n)
// filter - O(n)
// find - O(n)
// indexOf - O(n)
// includes - O(n)
// join - O(n)

//^ Algorithms and problem solving patterns

// What is an algorithm?
// A process or set of steps to accomplish a certain task
// How do you improve?
// Devise a plan for solving problems
// Master common problem solving patterns

//* Problem Solving Patterns
// * understand the problem
// * explore concrete examples
// * break it down
// * solve/simplify
// * look back and refactor

//^ Understand the problem
// * Can I restate the problem in my own words?
// * What are the inputs that go into the problem?
// * What are the outputs that should come from the solution to the problem?
// * Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? 
// (You may not be able to answer this question until you set about solving the problem.That's okay; it's still worth considering the question at this early stage.)
// * How should I label the important pieces of data that are a part of the problem?

// Write a function which takes two numbers and returns their sum

//^ Explore concrete examples (problem solving)
// Coming up with examples can help you understand the problem better
// Examples also provide sanity checks that your eventual solution works how it should

//^ Explore examples
// * Start with simple examples
// * Progress to more complex examples
// * Explore examples with empty inputs
// * Explore examples with invalid inputs

// Write a function which takes in a string and returns counts of each character in the string
function countString(str) {
    let result = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

// console.log(countString("Hello")); // { h: 1, e: 1, l: 2, o: 1 }
// console.log(countString("This is a very long text to count")) // { t: 6, h: 2, i: 3, s: 2, a: 2, v: 1, e: 2, r: 2, y: 2, l: 2, o: 3, n: 3, g: 1, x: 1, c: 1, u: 1 }

//^ Break it down
// Explicitly write out the steps you need to take
// This forces you to think about the code you'll write before you write it, and helps you catch any conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well

//^ Solve/Simplify
// if you can't solve the problem, solve a simpler problem
// simplify the problem
// * Find the core difficulty in what you're trying to do
// * Temporarily ignore that difficulty
// * Write a simplified solution
// * Then incorporate that difficulty back in

//^ Look back and refactor
// Refactoring questions
// * Can you check the result?
// * Can you derive the result differently?
// * Can you understand it at a glance?
// * Can you use the result or method for some other problem?
// * Can you improve the performance of your solution?
// * Can you think of other ways to refactor?
// * How have other people solved this problem?

//! Refactoring the code
function countString1(str) {
    let result = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    // 48 - 57 are numbers
    // 65 - 90 are uppercase letters
    // 97 - 122 are lowercase letters
    if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
        return false;
    }
    return true;
}

//^ How do you improve?
// * Devise a plan for solving problems
// * Master common problem solving patterns

//^ Some patterns
// * Frequency Counter
// * Multiple Pointers
// * Sliding Window
// * Divide and Conquer
// * Dynamic Programming
// * Greedy Algorithms
// * Backtracking
// * Many more!

//^ Frequency Counter
// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(n^2) operations with arrays/strings

//^ An example
// Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

//^ Multiple Pointers
// Creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition
// Very efficient for solving problems with minimal space complexity as well

//^ Count Unique Values
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

//^ Sliding Window
// This pattern involves creating a window which can either be an array or number from one position to another

//^ An example
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

//^ Divide and Conquer

//! *-*-*-*-*-*-*-*-*-*-*-
//& Recursion
// A process (a function in our case) that calls itself

//* Objectives
// * Define what recursion is and how it can be used
// * Understand the two essential components of a recursive function
// * Visualize the call stack to better debug and understand recursive functions
// * Use helper method recursion and pure recursion to solve more difficult problems

//^ What is recursion?
// A process (a function in our case) that calls itself

//^ Why do I need to know this?
// * It's everywhere!
// * JSON.parse / JSON.stringify are recursive
// * document.getElementById and DOM traversal algorithms
// * Object traversal
// * We will see it with more complex data structures

//^ The Call Stack
// In almost all programming languages, there is a built-in data structure that manages what happens when functions are invoked
// It's called the call stack
// The call stack is a stack data structure - we'll talk about stacks later on in the course
// Any time a function is invoked, it is placed (pushed) on the top of the call stack
// When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)

// Why do I care?
// * You're used to functions being pushed on the call stack and popped off when they are done
// * When we write recursive functions, we keep pushing new functions onto the call stack!

//^ How recursive functions work
// Invoke the same function with a different input until you reach your base case
// Base case is the condition when the recursion ends
// The call stack keeps track of the function calls

//^ Two essential parts of a recursive function
// Base case
// Different input

// ^ Where things go wrong
// No base case
// Forgetting to return or returning the wrong thing
// Stack overflow!

//^ Helper method recursion
// A pattern where we have an outer function that is not recursive which calls an inner function which is recursive

//^ Pure recursion

//^ Pure recursion tips
// For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
// Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
// To make copies of objects, use Object.assign or the spread operator

