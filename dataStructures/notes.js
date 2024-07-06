
// ^ Data Structures

// * Binary Search Tree
// * Linked List
// * Stack
// * Queue
// * Hash Table
// * Heap
// * Graph
// * Trie
// * Set
// * Array
// * Singly Linked List
// * Doubly Linked List
// * Circular Linked List

// ^ What do they do?
// * Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

// ^ Why so many?
// * Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.

// ^ Why care?
// * The more time you spend as a developer, the more likely you'll need to use one of these data structures. Being able to identify when to use one is important.
// * You've already worked with many of them unknowingly.

// & There is no one best data structure.
// * They all excel at different things.

// ^ ES2015 Class Syntax

// & Objectives
// * Explain what a class is
// * Understand how JavaScript implements the idea of classes
// * Define terms like abstraction, ecapsulation and polimorphism
// * Use ES2015 classes to implement data structures

// ^ What is a class?
// * A blueprint for creating objects with pre-defined properties and methods

// ^ The Syntax
class Student {
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }
}

// * The method to create new objects must be called constructor
// * The class keyword creates a constant, so you can not redefine it. Watch out for the syntax.

// ^ Creating Objects
// * To create a new object, use the new keyword followed by the class name
let firstStudent = new Student("Colt", "Steele")
let secondStudent = new Student("Blue", "Steele")

// ^ Instance Methods
// * Instance methods are methods that provide functionality to objects created from the class
class Student {
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.tardies = 0
    this.scores = []
  }
  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}`
  }

  markLate(){
    this.tardies += 1
    if(this.tardies >= 3){
      return "YOU ARE EXPELLED!!!!"
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
  }

  addScore(score){
    this.scores.push(score)
    return this.scores
  }

  calculateAverage(){
    let sum = this.scores.reduce(function(a,b){return a+b})
    return sum/this.scores.length
  }

  // * Class Methods
  static EnrollStudents(){
    return "ENROLLING STUDENTS!"
  }
}

let thirdStudent = new Student("Colt", "Steele")
thirdStudent.fullName() // Your full name is Colt Steele

// * add a score
thirdStudent.addScore(92) // [92]

// ^ Class Methods
// * Methods that are called on the class itself and not on instances of the class
// * The static keyword defines a static method for a class. Static methods are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application.


/**
 * Represents a point in a 2D coordinate system.
 * @class
 */
class Point {
  /*
   * Creates a new instance of the Point class.
   * @constructor
   * @param {number} x - The x-coordinate of the point.
   * @param {number} y - The y-coordinate of the point.
   */
  constructor(x, y){
    this.x = x
    this.y = y
  }

  /*
   * Calculates the distance between two points.
   * @static
   * @param {Point} a - The first point.
   * @param {Point} b - The second point.
   * @returns {number} The distance between the two points.
   */
  static distance(a, b){
    const dx = a.x - b.x
    const dy = a.y - b.y
    return Math.hypot(dx, dy)
  }
}

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)


