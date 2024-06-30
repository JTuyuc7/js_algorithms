/*
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
*/


function capitalizeWords (arr) {
  if(arr.length === 0) return []
  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)))
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

//* if you are using a recursive function and you are manipulating an array, you should use concat() instead of push() to avoid mutating the original array.
// * In your base case, you should return an empty array [] instead of an empty string ''.