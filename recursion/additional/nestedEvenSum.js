/*
  Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
*/
function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;
  for( let key in obj){
    if( typeof obj[key] === 'object'){
      sum += nestedEvenSum(obj[key])
    }else if(typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key]
    }
  }
  return sum;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10

// Time complexity: O(n) - linear time complexity
// Space complexity: O(n) - linear space complexity

// * The key to solving this problem is to recognize that the object can contain nested objects.

// * We can use a for...in loop to iterate through the object. If the value of a key is an object, we recursively call the function on the nested object. If the value of a key is a number and it is even, we add it to the sum.

// * If you are using a for...in loop to iterate through an object, you need to have an if statement to check for you base case
// * If you are using a loop and an if statement you can have an outer variable to store your result and return it, but important, when you call the recurisve function you have to add it to the outer variable






