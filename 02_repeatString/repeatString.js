const repeatString = function (string, num) {
  let outputString = "";
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      outputString += string;
    }
    return outputString;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
