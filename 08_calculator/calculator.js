// add, subtract, get the sum, multiply, get the power, and find the factorial
const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array1) {
  let sum = 0;
  for (let i = 0; i < array1.length; i++) {
    sum += array1[i];
  }
  return sum;
};

const multiply = function (array1) {
  let prod = 1;
  for (let i = 0; i <= array1.length - 1; i++) {
    prod *= array1[i];
  }
  return prod;
};
console.log(multiply([1, 4, 14]));
const power = function (num, power) {
  return num ** power;
};

const factorial = function (num) {
  fact = 1;
  for (let i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
