const palindromes = function (string1) {
  const processedString = string1.toLowerCase().replace(/[^a-z]/g, "");
  return processedString.split("").reverse().join("") == processedString;
};

// Do not edit below this line
module.exports = palindromes;
