class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  // ^ addVertex
  // * Accepts a name of a vertex
  // * It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  // ^ addEdge
  // * This function should accept two vertices, we can call them vertex1 and vertex2
  // * The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
  // * The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
  // * Don't worry about handling errors/invalid vertices
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  // ^ removeEdge
  // * This function should accept two vertices, we'll call them vertex1 and vertex2
  // * The function should reassign the key of vertex1 to be an array that does not contain vertex2
  // * The function should reassign the key of vertex2 to be an array that does not contain vertex1
  // * Don't worry about handling errors/invalid vertices
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1].length > 0) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      )
    }

    if (this.adjacencyList[vertex2].length > 0) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      )
    }
  }

  // ^ removeVertex
  // * The function should accept a vertex to remove
  // * The function should loop as long as there are any other vertices in the adjacency list for that vertex
  // * Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
  // * delete the key in the adjacency list for that vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }
}

const g = new Graph()
g.addVertex('Tokyo')
g.addVertex('Dallas')
g.addVertex('Aspen')

// * Add Edge
g.addEdge('Tokyo', 'Dallas')
g.addEdge('Dallas', 'Aspen')
