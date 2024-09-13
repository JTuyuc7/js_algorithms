class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  DFSPreOrder() {
    let data = [];
    let current = this.root
    function traverse(node) {
      data.push(node.value)
      if (node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(current)
    return data
  }
  DFSInOrder() {
    let data = []
    let current = this.root
    function traverse(node) {
      if(node.left) traverse(node.left)
      data.push(node.value)
      if(node.right) traverse(node.right)
    }
    traverse(current)
    return data
  }
  DFSPostOrder() {
    let data = []
    let current = this.root
    function traverse(node) {
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(current)
    return data
  }
}
