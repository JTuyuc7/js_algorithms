class Stack {
  constructor() {
        this.queue = new Queue();
    }
    push(val) {
        let queue = this.queue ,queueTwo = new Queue();
        queueTwo.enqueue(val);
        while(queue.size){
            queueTwo.enqueue(queue.dequeue());
        }       
        this.queue = queueTwo;
        return this;
    } //O(n) time complexity
 
    pop() {
        return this.queue.dequeue();
    }
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  enqueue(data) {
    var node = new Node(data)

    if (!this.first) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }

    return ++this.size
  }

  dequeue() {
    if (!this.first) return null

    var temp = this.first
    if (this.first == this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.value
  }
}

var s = new Stack()
s.push(10).push(20).push(30)
s.pop() // 30
s.pop() // 20
s.pop() // 10
s.pop() // null
s.push(30).push(40).push(50)
s.pop() // 50
s.push(60)
s.pop() // 60
