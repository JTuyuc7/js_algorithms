

function areThereDuplicates(...args) {
  if (args.length === 0) return false
  
  let frequencyCounter = {}
  for (let val of args) {
    frequencyCounter[val] = ++frequencyCounter[val] || 1
  }

  if((Object.keys(frequencyCounter).length !== args.length)) {
    return true
  }
  return false
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true