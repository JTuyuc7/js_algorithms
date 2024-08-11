class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight })
    this.adjacencyList[vertex2].push({ node: vertex1, weight })
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    let path = [] // to return at end
    let smallest

    //! Build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }

    //! As long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val
      if (smallest === finish) {
        //! We are done
        //! Build up path to return at end
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // * find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor]
          // * calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node
          if (candidate < distances[nextNeighbor]) {
            // * updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate
            // * updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest

            // * enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }
    return path.concat(smallest).reverse()
  }
}

class PriorityQueue {
  constructor() {
    // this.values = [];
    // this.values = [41, 39, 33, 18, 27, 12]
    this.values = []
  }

  // & INSERT PSEUDOCODE
  // * Push the value into the values property on the heap
  // * Bubble the value up to its correct spot
  // * Create a variable called index which is the length of the values property - 1
  // * Create a variable called parentIndex which is the floor of (index - 1) / 2
  // * Keep looping as long as the values element at the parentIndex is less than the values element at the child index
  // * Swap the value of the values element at the parentIndex with the value of the element property at the child index
  // * Set the index to be the parentIndex, and start over
  enqueue(val, priority) {
    const element = new Node(val, priority)
    this.values.push(element)
    this.bubbleUp()
  }

  bubbleUp() {
    let idx = this.values.length - 1
    const ele = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (ele.priority >= parent.priority) break

      this.values[parentIdx] = ele
      this.values[idx] = parent
      idx = parentIdx
    }
  }

  // & REMOVE PSEUDOCODE
  // * Swap the first value in the values property with the last one
  // * Pop from the values property, so you can return the value at the end
  // * Have the new root "sink down" to the correct spot...
  // * Your parent index starts at 0 (the root)
  // * Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
  // * Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
  // * If the left or right child is greater than the element... swap. If both left and right children are larger, swap with the largest child
  // * The child index you swapped to now becomes the new parent index
  // * Keep looping and swapping until neither child is larger than the element
  // * Return the old root
  dequeue() {
    const min = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end

      this.sinkDown()
    }
    return min
  }

  sinkDown() {
    let idx = 0
    const length = this.values.length
    const ele = this.values[0]

    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild.priority < ele.priority) {
          swap = leftChildIdx
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild.priority < ele.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx
        }
      }

      if (swap === null) break

      this.values[idx] = this.values[swap]
      this.values[swap] = ele
      idx = swap
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

let graph = new WeightedGraph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('C', 'D', 2)
graph.addEdge('C', 'F', 4)
graph.addEdge('D', 'E', 3)
graph.addEdge('D', 'F', 1)
graph.addEdge('E', 'F', 1)


graph.Dijkstra("A", "E");

