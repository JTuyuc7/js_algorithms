function pivotHelper(arr, start = 0, end = arr.length - 1) {
  const swap = (arrS, idx1, idx2) =>
    ([arrS[idx1], arrS[idx2]] = [arrS[idx2], arrS[idx1]])
  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

function quickSort(arr, left = 0, rigth = arr.length - 1) {
  if (left < rigth) {
    let pivotIdx = pivotHelper(arr, left, rigth)
    quickSort(arr, left, pivotIdx - 1)
    quickSort(arr, pivotIdx + 1, rigth)
  }
  return arr
}

quickSort([4, 8, 2, 1, 5, 7, 6, 3])

// pivotHelper([4,8,2,1,5,7,6,3])
// quickSort([4,8,2,1,5,7,6,3]) // [1, 2, 3, 4, 5, 6, 7, 8]

// Time complexity:
// * Best: O(n log n)
// * Average: O(n log n)
// * Worst: O(n^2)
