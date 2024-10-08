class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value)
      return this
    } else {
      var current = this.root
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value)
            return this
          } else {
            current = current.left
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value)
            return this
          } else {
            current = current.right
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return undefined;
    let current = this.root
    let found = false
    if (current.value === value) return current
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    return current || undefined
  }
}
