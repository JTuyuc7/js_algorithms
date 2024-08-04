
// ^ Graph traversal uses
// * Peer to peer networking
// * Web crawlers
// * Finding "closest" matches/recommendations
// * Shortest path problems
//   - GPS Navigation
//   - Solving mazes
//   - AI (shortest path to win the game)

// ^ Depth First Traversal
// * Explore as far as possible along each branch before backtracking

// ^ DFS Pseudocode
// * Recursive
// * The function should accept a starting node
// * Create a list to store the end result, to be returned at the very end
// * Create an object to store visited vertices
// * Create a helper function which accepts a vertex
// *   - The helper function should return early if the vertex is empty
// *   - The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
// *   - Loop over all of the values in the adjacencyList for that vertex
// *   - If any of those values have not been visited, recursively invoke the helper function with that vertex
// * Invoke the helper function with the starting vertex
// * Return the result array

// ^ DFS Pseudocode (Iterative)


g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
