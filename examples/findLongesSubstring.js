/*
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
*/

function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) return 0
  
  let longest = 0
  let seen = {}
  let start = 0
  for(let char in str) {
    seen[str[char]] = ++seen[str[char]] || 1
  }
  console.log(seen)
  return longest
}

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6