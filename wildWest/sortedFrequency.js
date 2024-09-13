function sortedFrequency(arr, num){
  // add whatever parameters you deem necessary - good luck!
  let count = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === num){
      count++
    }
  }

  return count === 0 ? -1 : count
}

sortedFrequency([1,1,2,2,2,2,3],2) // 4 
sortedFrequency([1,1,2,2,2,2,3],3) // 1 
sortedFrequency([1,1,2,2,2,2,3],1) // 2 
sortedFrequency([1,1,2,2,2,2,3],4) // -1