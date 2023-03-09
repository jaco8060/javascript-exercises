const removeFromArray = function (array1, ...targets) {
  for (let i = 0; i < targets.length; ) {
    const index = array1.indexOf(targets[i]);
    if (index != -1) {|
      array1.splice(index, 1);
    }
  }
  return array1;
};

// Do not edit below this line
module.exports = removeFromArray;
