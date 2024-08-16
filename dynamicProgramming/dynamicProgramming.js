

// ^ Fibbonaci sequence using recursion
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// ^ Fibbonaci sequence using memoization
function fib(n, memo = []) {
  // * if the value is already in the memo, return it
  if (memo[n] !== undefined) return memo[n];
  // * if n is less than or equal to 2, return 1
  if (n <= 2) return 1;
  // * store the result of the recursive call in the memo
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  // * return the result
  memo[n] = res;
  // * return the result
  return res;
}

// ^ Fibbonaci sequence using tabulation
function fib(n) {
  // * create an array with n + 1 elements
  var fibNums = Array.from({ length: n + 1 });
  // * set the first two elements to 1
  fibNums[1] = 1;
  fibNums[2] = 1;
  // * iterate from 3 to n
  for (var i = 3; i <= n; i++) {
    // * set the current element to the sum of the previous two elements
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  // * return the last element
  return fibNums[n];
}