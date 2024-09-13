class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = []
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    )
  }
  depthFirstSearch(start) {
    const result = []
    const visited = {}
    const adjacencyList = this.adjacencyList
    ;(function dfs(vertex) {
      if (!vertex) return null
      visited[vertex] = true
      result.push(vertex)
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    })(start)
    return result
  }
}

var graph = new Graph()

graph.addVertex('S')
graph.addVertex('P')
graph.addVertex('U')
graph.addVertex('X')
graph.addVertex('Q')
graph.addVertex('Y')
graph.addVertex('V')
graph.addVertex('R')
graph.addVertex('W')
graph.addVertex('T')

graph.addEdge('S', 'P')
