const caesar = function (string, shift) {
  newString = "";
  for (let i = 0; i < string.length; i++) {
    if (/[a-zA-Z]/.test(string[i])) {
      //if current character is a letter
      newString += String.fromCharCode(string.charCodeAt(i) + shift);
    } else {
      newString += string[i];
    }
  }
  return newString;
};
// > In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.
// Do not edit below this line
module.exports = caesar;
