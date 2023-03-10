const findTheOldest = function (array) {
  let oldest = array[0];
  for (let i = 1; i < array.length; i++) {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(array[i].yearOfBirth, array[i].yearOfDeath);
    if (currentAge > oldestAge) {
      oldest = array[i];
    }
  }
  return oldest;
};
const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};
// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 2018,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ];

// console.log(findTheOldest(people));
// Given an array of objects representing people with a birth and death year, return the oldest person.

// ## Hints
// - You should return the whole person object, but the tests mostly just check to make sure the name is correct.
// - this can be done with a couple of chained array methods, or by using `reduce`.
// - One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.
// Do not edit below this line
module.exports = findTheOldest;
