/*
  Frequency Counter - findAllDuplicates
Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.
*/

function findAllDuplicates(array){
  // add whatever parameters you deem necessary - good luck!
  let duplicated = {}
  let result = []
  for (let num of array) {
    duplicated[num] = ++duplicated[num] || 1
    if(duplicated[num] === 2) {
      result.push(num)
    }
  }
  console.log(result)
  return result
}

findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1