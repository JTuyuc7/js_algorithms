

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // ^ Insert Pseudocode 
  // * Create a new node
  // * Starting at the root
  //   * Check if there is a root, if not - the root now becomes that new node!
  //   * If there is a root, check if the value of the new node is greater than or less than the value of the root
  //   * If it is greater
  //     * Check to see if there is a node to the right
  //       * If there is, move to that node and repeat these steps
  //       * If there is not, add that node as the right property
  //   * If it is less
  //     * Check to see if there is a node to the left
  //       * If there is, move to that node and repeat these steps
  //       * If there is not, add that node as the left property
  insert(val) {
    let newNode = new Node(val)
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if( val === current.val) return undefined;
        if (val < current.val) {
          if(current.left === null) {
            current.left = newNode;
            return this;
          }
            current = current.left
        } else {
          if(current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right
          }
        }
      }
    }
  }


  // ^ Find Pseudocode
  // * Starting at the root
  //   * Check if there is a root, if not - we're done searching!
  //   * If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
  //   * If not, check to see if the value is greater than or less than the value of the root
  //   * If it is greater
  //     * Check to see if there is a node to the right
  //       * If there is, move to that node and repeat these steps
  //       * If there is not, we're done searching!
  //   * If it is less
  //     * Check to see if there is a node to the left
  //       * If there is, move to that node and repeat these steps
  //       * If there is not, we're done searching!
  find(val) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    if (current.val === val) return current;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return current || false;
  }

  // ^ Contains Pseudocode
  contains(val) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    // if (current.val === val) return current;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
        return true;
      }
    }
    return false;
  }
}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)

//       10
//    5     13
//  2  7   11  16