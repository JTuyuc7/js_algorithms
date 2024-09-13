/*
Frequency Counter - constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N)
*/

// function constructNote(str1, str2) {

//   let str1Obj = {}
//   let str2Obj = {}

//   for (let char of str1) {
//     str1Obj[char] = ++str1Obj[char] || 1
//   }

//   for (let char of str2) {
//     str2Obj[char] = ++str2Obj[char] || 1
//   }

//   for (let key in str1Obj) {
//     if (!str2Obj[key]) {
//       return false
//     }
//     if (str2Obj[key] < str1Obj[key]) {
//       return false
//     }
//   }
//   console.log(str1Obj, str2Obj)
//   return true
// }

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function constructNote(str1, str2) {

  let splitedWord = str1.split('')
  let splitedLetters = str2.split('')

  while( splitedWord.length ) {
    let letter = splitedWord.pop()
    console.log("🚀 ~ constructNote ~ letter:", letter)
    
    let index = splitedLetters.indexOf(letter)
    if (index === -1) {
      // console.log(false)
      return false
    }
    splitedLetters.splice(index, 1)
  }
  // console.log(true)
  return true
  
}

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true