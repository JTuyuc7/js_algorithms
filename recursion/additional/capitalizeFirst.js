/*
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
*/

function capitalizeFirst(arr) {
  if(arr.length === 0) return []
  return [arr[0][0].toUpperCase() + arr[0].slice(1)].concat(capitalizeFirst(arr.slice(1)))
}

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

//* if you are using a recursive function and you are manipulating an array, you should use concat() instead of push() to avoid mutating the original array.
//* on your return it should be wrapped in [] to return an array, if you don't wrap it in [] it will return a string.