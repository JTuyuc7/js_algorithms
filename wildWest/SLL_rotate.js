class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  shift() {
    if (!this.head) return undefined
    let currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currentHead
  }
  rotate(place) {
    if (place === 0 || place >= this.length) return this
    if (place < 0) {
      place = this.length + place
    }
    let current = this.head
    let counter = 0
    while (counter < place) {
      this.push(current.val)
      this.shift(current.val)
      current = current.next
      counter++
    }

    return this
  }
}
