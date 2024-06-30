/*
  Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
*/

function collectStrings(obj){
  let result = []
  for( let key in obj){
    if( typeof obj[key] === 'string'){
      result = result.concat(obj[key])
    }else if(typeof obj[key] === 'object'){
      result = result.concat(collectStrings(obj[key]))
    }
  }
  return result
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])

// * on your base case the if check matters in the order you put it