
function power(b, p){
  if( p === 0) return 1
  
  return b * power(b, p - 1)
}

power(2, 0) // 1
power(2, 2) // 4
power(2, 4) // 16