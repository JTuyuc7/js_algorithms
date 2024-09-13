class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }

  bubbleUp() {
    let idx = this.values.length - 1
    const ele = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (ele <= parent) break

      this.values[parentIdx] = ele
      this.values[idx] = parent
      idx = parentIdx
    }
  }

  extractMax() {
    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end

      this.sinkDown()
    }
    return max
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
        if (leftChild > ele) {
          swap = leftChildIdx
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild > ele) ||
          (swap !== null && rightChild > leftChild)
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

binaryHeap.insert(1)
binaryHeap.insert(2)
binaryHeap.insert(3)
binaryHeap.insert(4)
binaryHeap.insert(5)
binaryHeap.insert(6)
binaryHeap.extractMax()
binaryHeap.values[0] // 5

binaryHeap.values // [5,4,2,1,3])

binaryHeap.extractMax()
binaryHeap.values // [4,3,2,1])

binaryHeap.extractMax()
binaryHeap.values // [3,1,2])
