
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
function reverse(str){
  if( str.length === 0) return ''
  return str.slice(-1) + reverse(str.slice(0, -1))
}

reverse('awesome') // 'emosewa'

// * If you are using a recursive function and you are manipulating a string, you should use slice() instead of substr() to avoid mutating the original string.
// * on your return it should be added to a string and using + ''
