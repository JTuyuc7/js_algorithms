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
  insert(value){
      let temp = this.root;
      let node = new Node(value);
      if(this.root === null) {
          this.root = node;
          return this;
      } else {
          while(true) {
              //move to the left
              if(temp.value > node.value) {
 
                if(temp.left === null) {
                    temp.left = node;
                    return this;
                } else {
                    temp = temp.left;
                }
              } else if (temp.value < node.value) {
              //move to the right   
                if(temp.right === null) {
                    temp.right = node;
                    return this;
                } else {
                    temp = temp.right;
                }       
              } 
 
          }
      }
      
  }
}
