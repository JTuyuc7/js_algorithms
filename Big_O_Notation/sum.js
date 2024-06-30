// add a number from 0 to n
function sum(n) {
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}


// console.time('sum');
// console.log(sum(10000000000));
// console.timeEnd('sum');


function addUpTo(n) {
    return n * (n + 1) / 2;
}

console.time('sum');
console.log(addUpTo(10000000000));
console.timeEnd('sum');


/*
  * Faster?
  * Less memory-intensive?
  * More readable?
*/