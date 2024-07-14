// ^ BFS
// * Steps - Iteratively
// * create a queue (this can be an array) and a variable to store the values of nodes visited
// * place the root node in the queue
// * loop as long as there is anything in the queue
// * dequeue a node from the queue and push the value of the node into the variable that stores the nodes visited
// * if there is a left property on the node dequeued - add it to the queue
// * if there is a right property on the node dequeued - add it to the queue
// * return the variable that stores the values

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
    var newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    }
    var current = this.root
    while (true) {
      if (value === current.value) return undefined
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }
  find(value) {
    if (this.root === null) return false
    var current = this.root,
      found = false
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    if (!found) return undefined
    return current
  }
  contains(value) {
    if (this.root === null) return false
    var current = this.root,
      found = false
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return true
      }
    }
    return false
  }
  BFS() {
    let node = this.root
    let queue = []
    let data = []
    queue.push(this.root)

    while (queue.length) {
      node = queue.shift()
      data.push(node.value)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    return data
  }

  // ^ DFS - PreOrder
  // * Steps - Recursively
  // * create a variable to store the values of nodes visited
  // * store the root of the BST in a variable called current
  // * write a helper function which accepts a node
  // * push the value of the node to the variable that stores the values
  // * if the node has a left property, call the helper function with the left property on the node
  // * if the node has a right property, call the helper function with the right property on the node
  // * invoke the helper function with the current variable
  // * return the array of values
  DFSPreOrder() {
    let data = []

    let current = this.root

    function traverse(node) {
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(current)
    return data
  }

  // ^ DFS - PostOrder
  // * Steps - Recursively
  // * create a variable to store the values of nodes visited
  // * store the root of the BST in a variable called current
  // * write a helper function which accepts a node
  // * if the node has a left property, call the helper function with the left property on the node
  // * if the node has a right property, call the helper function with the right property on the node
  // * push the value of the node to the variable that stores the values
  // * invoke the helper function with the current variable
  // * return the array of values
  DFSPostOrder() {
    let data = []
    let current = this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(current)
    return data
  }

  // ^ DFS - InOrder
  // * Steps - Recursively
  // * create a variable to store the values of nodes visited
  // * store the root of the BST in a variable called current
  // * write a helper function which accepts a node
  // * if the node has a left property, call the helper function with the left property on the node
  // * push the value of the node to the variable that stores the values
  // * if the node has a right property, call the helper function with the right property on the node
  // * invoke the helper function with the current variable
  // * return the array of values
  DFSInOrder() {
    let data = []
    let current = this.root 
    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(current)
    return data
  }
}

var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
tree.BFS()
tree.DFSPreOrder()
tree.DFSPostOrder()
tree.DFSInOrder()