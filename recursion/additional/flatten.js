
/*
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
*/

function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
  let result = []
  for( let i = 0; i < arr.length; i++){
    if( Array.isArray(arr[i])){
      result = result.concat(flatten(arr[i]))
    }else {
      result.push(arr[i])
    }
  }
  return result
}

flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

//^ NOTE: Array.isArray() is a method that returns true if the argument is an array, and false otherwise.