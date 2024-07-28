
// ^ Graphs
// *  - Graphs are a collection of nodes and connections between those nodes

// & OBJECTIVES
// * Explain what a graph is
// * Compare and contrast different types of graphs and their use cases
// * Implement a graph using an adjacency list
// * Traverse through a graph using Breadth First Search and Depth First Search
// * Compare and contrast graph traversal algorithms

// ^ What is a graph?
// * A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

// ^ Uses for graphs
// * Social Networks
// * Location / Mapping
// * Routing Algorithms
// * Visual Hierarchy
// * Recommendations
//  - "People also watched"
//  - "People you might know"
// * File System Optimizations

// ^ Types of graphs
// * Vertex - a node
// * Edge - connection between nodes
// * Undirected Graph - no direction associated with an edge
// * Directed Graph - edges have direction

// ^ Weighted Graphs
// * A graph with values associated with edges
// * Used to represent things like distances, etc.

// ^ Unweighted Graphs
// * A graph with no values associated with edges

// ^ Representing a graph
// * Adjacency Matrix
//  - Can take up more space (in sparse graphs)
//  - Slower to iterate over all edges
//  - Faster to lookup specific edge

// ^ Adjacency List 
// * Can take up less space (in sparse graphs)
// * Faster to iterate over all edges
// * Can be slower to lookup specific edge

// ^ Differences and Big O
// * |V| - number of vertices
// * |E| - number of edges
// * ----------------|----------------|------------------
// * Operation       | Adjacency List | Adjacency Matrix
// * Add Vertex      | O(1)           | O(|V^2|)
// * Add Edge        | O(1)           | O(1)
// * Remove Vertex   | O(|V| + |E|)   | O(|V^2|)
// * Remove Edge     | O(|E|)         | O(1)
// * Query           | O(|V| + |E|)   | O(1)
// * Storage         | O(|V| + |E|)   | O(|V^2|)
// * |               |                |
// * ----------------|----------------|------------------

// ^ Adjacency List
// * Can take up less space (in sparse graphs)
// * Faster to iterate over all edges
// * Can be slower to lookup specific edge

// ^ Adjacency Matrix
// * Takes up more space (in sparse graphs)
// * Slower to iterate over all edges
// * Faster to lookup specific edge