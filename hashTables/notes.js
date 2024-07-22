
// ^ Has Tables
// * Example of a hash table
// * Define what a hashing algorithm is
// * Discuss what makes a good hashing algorithm
// * Understand how collisions occur in hash tables
// * Handle collisions using separate chaining or linear probing
// * Compare and contrast hash tables and binary search trees 
// * Implement a hash table from scratch
// * Understand when to use hash tables in the real world

// ^ What is a hash table?
// * Hash tables are used to store key-value pairs
// * They are like arrays, but the keys are not ordered
// * Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values

// ^ Why should I care?
// * Nearly every programming language has some sort of hash table data structure
// * Because of their speed, hash tables are very commonly used

// ^ Hash Tables in the real world
// * Python has Dictionaries
// * JS has Objects and Maps
// * Java, Go, Scala have Maps
// * Ruby has Hashes
// * Hash tables are widely used because of their speed and their ability to store key-value pairs

// ^ Has tabl example
// * Let's imagine we are trying to store some colors
// * We could use an array/list
// * But what if we wanted to associate each color with a specific value?
// * We could use a hash table!

// ^ What makes a good hash?
// * Fast (i.e. constant time)
// * Doesn't cluster outputs at specific indices, but distributes uniformly
// * Deterministic (same input yields same output)
 
// ^ Handling Collisions
// * Even with a large array and a great hash function, collisions are inevitable
// * There are many strategies for dealing with collisions, but we'll focus on two:
// * Separate Chaining
// * Linear Probing

// ^ Separate Chaining
// * With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list)

// ^ Linear Probing
// * With linear probing, when we find a collision, we search through the array to find the next empty slot

// ^ Big O of Hash Tables
// * Insert: O(1)
// * Deletion: O(1)
// * Access: O(1)Í

// ^ Recap
// * Hash tables are collections of key-value pairs
// * Hash tables can find values quickly given a key
// * Hash tables can add new key-values quickly
// * Hash tables store data in a large array, and work by hashing the keys
// * A good hash should be fast, distribute keys uniformly, and be deterministic
// * Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
// * When collisions are rare, hash tables are very fast!
// * Hash tables are widely used in the real world!
