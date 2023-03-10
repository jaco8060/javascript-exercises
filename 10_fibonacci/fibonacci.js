const fibonacci = function (num) {
  if (num <= 0) {
    return "OOPS";
  } else if (num == 1 || num == 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};
console.log(fibonacci(4));
// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

// ```javascript
// fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6) // returns 8
// Do not edit below this line
module.exports = fibonacci;
