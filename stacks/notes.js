
// ^ Objectives
// * Define what a stack is
// * Understand use cases for a stack
// * Implement operations on a stack data structure
// * Compare and contrast stacks and singly linked lists

// ^ What is a stack?
// * A LIFO data structure!
// * The last element added to the stack will be the first element removed from the stack

// ^ Hoow is a stack used?
// * Think about a stack of plates, or a stack of markers, or a stack of... anything!
// * As you pile things up the last thing you put down is the first thing that you pick up

// ^ Where stacks are used
// * Managing function invocations
// * Undo / Redo
// * Routing (the history object) is treated like a stack!

// ^ There is more than one way to implement a stack

// ^ Pushing Psuedocode
// * The function should accept a value
// * Create a new node with that value
// * If there are no nodes in the stack, set the first and last property to be the newly created node
// * If there is at least one node, create a variable that stores the current first property on the stack
// * Reset the first property to be the newly created node
// * Set the next property on the node to be the previously created variable
// * Increment the size of the stack by 1

// ^ Big O of Stacks
// * Insertion - O(1)
// * Removal - O(1)
// * Searching - O(n)
// * Access - O(n)

// ^ Recap
// * Stacks are a LIFO data structure where the last value in is always the first one out
// * Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward)!
// * They are not built in to JavaScript, but are relatively simple to implement