// ^ Node class
class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

// ^ Define a class DoublyLinkedList
class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // * Define a method push
  // * Adding a new node to the end of the Linked List
  // & Pseudocode
  // * Create a new node with the value passed to the function
  // * If the head property is null set the head and tail to be the newly created node
  // * If not, set the next property on the tail to be that node
  // * Set the previous property on the newly created node to be the tail
  // * Set the tail to be the newly created node
  // * Increment the length
  // * Return the Doubly Linked List
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  // * Define a method pop
  // * Removing a node from the end of the Linked List
  // & Pseudocode
  // * If there are no nodes in the list, return undefined
  // * Store the current tail in a variable to return later
  // * If the length is 1, set the head and tail to be null
  // * Update the tail to be the previous Node
  // * Set the newTail's next to null
  // * Decrement the length
  // * Return the value removed
  pop() {
    if (this.length === 0) return undefined
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }

  // * Define a method shift
  // * Removing a node from the beginning of the Linked List
  // & Pseudocode
  // * If the length is 0, return undefined
  // * Store the current head property in a variable
  // * If the length is 1, set the head and tail to be null
  // * Update the head to be the next of the current head
  // * Set the head's prev property to null
  // * Decrement the length
  // * Return the value removed
  shift() {
    if (this.length === 0) return undefined
    let shiftedNode = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = shiftedNode.next
      this.head.prev = null
      shiftedNode.next = null
    }
    this.length--
    return shiftedNode
  }

  // * Define a method unshift
  // * Adding a new node to the beginning of the Linked List
  // & Pseudocode
  // * Create a new node with the value passed to the function
  // * If the length is 0, set the head and tail to be the new node
  // * Otherwise, set the prev property on the head of the list to be the new node
  // * Set the next property on the new node to be the head property
  // * Update the head to be the new node
  // * Increment the length
  // * Return the list
  unshift(val) {
    let newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  // * Define a method get
  // * Accessing a node in a Doubly Linked List by its position
  // & Pseudocode
  // * If the index is less than 0 or greater or equal to the length, return null
  // * If the index is less than or equal to half the length of the list
  //   * Loop through the list starting from the head and loop towards the middle
  //   * Return the node once it is found
  // * If the index is greater than half the length of the list
  //   * Loop through the list starting from the tail and loop towards the middle
  //   * Return the node once it is found
  get(index) {
    if (index <= 0 || index >= this.length) return null
    let current = this.head
    let count = 0
    let half = Math.floor(this.length / 2)
    if (index <= half) {
      while (count !== index) {
        current = current.next
        count++
      }
    } else {
      current = this.tail
      count = this.length - 1
      while (count !== index) {
        current = current.prev
        count--
      }
    }
    return current
  }

  // * Define a method set
  // * Changing the value of a node in a Doubly Linked List based on its position
  // & Pseudocode
  // * Create a variable which is the result of the get method at the index passed to the function
  //   * If the get method returns a valid node, set the value of that node to be the value passed to the function
  //   * Return true
  // * Otherwise, return false
  set(index, val) {
    let node = this.get(index)
    if (node) {
      node.val = val
      return true
    }
    return false
  }

  // * Define a method insert
  // * Adding a node in a Doubly Linked List by a certain position
  // & Pseudocode
  // * If the index is less than zero or greater than or equal to the length return false
  // * If the index is 0, unshift
  // * If the index is the same as the length, push
  // * Use the get method to access the index - 1
  // * Set the next and prev properties on the correct nodes to link everything together
  // * Increment the length
  // * Return true
  insert(index, val) {
    if (index < 0 || index >= this.length) return false
    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)

    let newNode = new Node(val)
    let prevNode = this.get(index - 1)
    let nextNode = prevNode.next

    prevNode.next = newNode
    newNode.prev = prevNode
    newNode.next = nextNode
    nextNode.prev = newNode

    this.length++

    return true
  }

  // * Define a method remove
  // * Removing a node in a Doubly Linked List by a certain position
  // & Pseudocode
  // * If the index is less than zero or greater than or equal to the length return undefined
  // * If the index is 0, shift
  // * If the index is the same as the length - 1, pop
  // * Use the get method to retrieve the item to be removed
  // * Update the next and prev properties to remove the found node from the list
  // * Set next and prev to null on the found node
  // * Decrement the length
  // * Return the removed node
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    let removedNode = this.get(index)
    let prevNode = removedNode.prev
    let nextNode = removedNode.next
    prevNode.next = nextNode
    nextNode.prev = prevNode
    removedNode.next = null
    removedNode.prev = null
    this.length--
    return removedNode
  }

  reverse() {
    let currentNode = this.head
    this.head = this.tail
    this.tail = currentNode
    let nextNode = null
    let prevNode = null
    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next
      currentNode.next = prevNode
      currentNode.prev = nextNode
      prevNode = currentNode
      currentNode = nextNode
    }
    return this
  }
}

// let list = new DoublyLinkedList()
// list.push(10)
// list.push(20)
// list.push(30)
// list.push(40)
