// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

// ```javascript
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// ```
const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }
  let sum = 0;
  let larger;
  let smaller;

  if (num1 > num2) {
    larger = num1;
    smaller = num2;
  } else {
    larger = num2;
    smaller = num1;
  }
  for (let i = smaller; i <= larger; i++) {
    sum += i;
  }
  return sum;
};
// console.log(sumAll(123, 1));
// Do not edit below this line
module.exports = sumAll;
