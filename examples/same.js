function areTheSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  console.log(frequencyCounter1, 'frequencyCounter1')
  console.log(frequencyCounter2, 'frequencyCounter2')

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }

  return true
}
console.log(areTheSame([1, 2, 3], [4, 1, 9])) // true
// console.log(areTheSame([1, 2, 3], [1, 9])); // false
// console.log(areTheSame([1, 2, 1], [4, 4, 1])); // false
// console.log(areTheSame([1, 2, 3], [1, 9, 4])); // false
// console.log(areTheSame([1, 2, 3], [1, 9, 9])); // false

function areTheSameMyImpl(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  let sortedArr1 = arr1.sort((a, b) => a - b)
  let sortedArr2 = arr2.sort((a, b) => a - b)

  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] ** 2 !== sortedArr2[i]) {
      return false
    }
  }
  return true
}

// console.log(areTheSame([1, 2, 3], [4, 1, 9])); // true
// console.log(areTheSame([1, 2, 3], [1, 9])); // false
// console.log(areTheSame([1, 2, 1], [4, 4, 1])); // false

// another implementation
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false
    }
    arr2.splice(correctIndex, 1)
  }
  return true
}
