/*
  Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
*/

function isPalindrome(str) { 
  if (str.length === 0) return true
  if (str[0] !== str.slice(-1)) return false
  return isPalindrome(str.slice(1, -1))
}

isPalindrome('awesome') // false
// isPalindrome('foobar') // false
isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false