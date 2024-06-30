//^ ANAGRAM
//? An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  let lookup = {}
  for (let char of str1) {
    lookup[char] = ++lookup[char] || 1
  }
  console.log(lookup, 'lookup')
  for (let char of str2) {
    console.log(lookup[char], ' --single char')
    if (!lookup[char]) {
      return false
    } else {
      lookup[char] -= 1
    }
  }
  return true
}

// console.log(validAnagram('anagram', 'nagaram')) // true
// console.log(validAnagram('rat', 'car')); // false


function myAnagram(str, str2) {
  if (str.length !== str2.length) {
    return false
  }
  
  let splitedStr = str.split('')

  for (let char in str2) {
    let index = splitedStr.indexOf(str2[char])
    if (index === -1) {
      return false
    }
    splitedStr.splice(index, 1)
  }

  return true

}

console.log(myAnagram('anagram', 'nagaram')) // true
console.log(myAnagram('rat', 'car')); // false