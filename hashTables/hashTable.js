function hash(key, arrLenght) {
  let total = 0
  let WEIRD_PRIME = 31
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i]
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrLenght
  }
  return total
}

console.log(hash('pink', 10)) // 0
console.log(hash('orange', 10)) // 7
console.log(hash('cyan', 10)) // 3
console.log(hash('red', 10)) // 2

// ^ Refining the hash function
// * Only hashes strings
// * Not constant time - linear in key length
// * Could be a little more random

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  // ^ Set / Get Pseudocode
  // * accepts a key and a value
  // * hashes the key
  // * stores the key-value pair in the hash table array via separate chaining
  // * accepts a key
  // * hashes the key
  // * retrieves the key-value pair in the hash table
  // * if the key isn't found, returns undefined

  set(key) {
    let index = this._hash(key)
    if(!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
    return index
  }

  get(key) {
    let index = this._hash(key)
    if(this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined
  }

  // ^ Keys / Values Pseudocode
  // * Loops through the hash table array and returns an array of keys in the table
  // * Loops through the hash table array and returns an array of values in the table
  keys() {
    let keysArr = []
    if(!this.keyMap) {
      return null
    }
    for (let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // * Check for duplicates
          if(!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr
  }

  values() {
    let valuesArr = []
    if(!this.keyMap) {
      return null
    }
    for (let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // * Check for duplicates
          if(!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr
  
  }
}

let ht = new HashTable(17)
ht.set('marron', '#800000')
ht.set('yellow', '#FFFF00')
ht.set('olive', '#808000')
ht.set('salmon', '#FA8072')
ht.set('lightcoral', '#F08080')
ht.set('mediumvioletred', '#C71585')
ht.set('plum', '#DDA0DD')
ht.set('purple', '#8a1a8a')