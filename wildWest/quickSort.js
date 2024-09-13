

function pivot(arr, comparator, start=0, end=arr.length - 1){
  // good luck!
  let pivotIdx = start,
        pivot = arr[pivotIdx];
    if(typeof comparator !== 'function'){
        comparator = (a, b) => a - b;
    }
    for(let i = start + 1; i <= end; i++){
        if(comparator(pivot, arr[i]) > 0){
            pivotIdx++;
            [arr[pivotIdx], arr[i]] = [arr[i], arr[pivotIdx]];
        }
    }
    [arr[start], arr[pivotIdx]] = [arr[pivotIdx], arr[start]]; // place pivot in a correct spot
    return pivotIdx;
}

function quickSort(arr, comparator, left = 0, rigth = arr.length - 1) {
  // good luck!

  if(left < rigth){
      let pivotIdx = pivot(arr, comparator, left, rigth);
      quickSort(arr, comparator, left, pivotIdx - 1);
      quickSort(arr, comparator, pivotIdx + 1, rigth);
  }
  return arr;
}