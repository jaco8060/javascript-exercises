const reverseString = function (string) {
  let stringLength = string.length;
  let reverseString = "";
  for (let i = stringLength - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
