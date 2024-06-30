
function sameFrequency(num1, num2) {
  
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  
  if( strNum1.length !== strNum2.length ) {
    return false;
  }

  let countNum1 = {};
  let countNum2 = {};

  for( let char in strNum1 ) {
    countNum1[strNum1[char]] = ++countNum1[strNum1[char]] || 1;
  }
  for (let char in strNum2) { 
    countNum2[strNum2[char]] = ++countNum2[strNum2[char]] || 1;
  }
  if( Object.keys(countNum1).join('') !== Object.keys(countNum2).join('') ) {
    return false;
  }

  return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385))// true
console.log(sameFrequency(22,222)) // false