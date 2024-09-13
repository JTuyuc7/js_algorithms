/*
Stacks - push Exercise
Implement the following methods on the Stack class

push - takes in a node and puts it at the top of the stack. Should return the new size of the stack.
*/

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;  
        this.size = 0;
    }
    push(val){
      let ele = new Node(val)
      if (!this.first) {
        this.first = ele
        this.last = ele
      }
      else {
        let temp = this.first
        this.first = ele
        this.first.next = temp
      }
      return ++this.size
    }
}
