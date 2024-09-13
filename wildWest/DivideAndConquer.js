function countZeroes(arr){
  // add whatever parameters you deem necessary - good luck!!!
  let visited = {}
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      visited[i] = true
    }
  }
  return Object.keys(visited).length
}

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0