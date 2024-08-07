/***********************************************************************
We've just covered how to write functions using arrow function syntax.
Let's give some old functions a new flair by rewriting them using fat arrow syntax.

Write a function `addFive` that accepts a number and will return that number
plus 5. Write this function on a single line, and utilize a fat arrow function's
ability to implicitly return by leaving out your own return statement.


Examples:


***********************************************************************/

// Your code here
  // ! multi line logic
const addFive1 = (num) => {
  return num + 5;
}

// ! one liner
// utilizing implicit return
const addFive = num => num + 5;

let result1 = addFive(0); // returns 5
console.log(result1)
let result2 = addFive(10); // returns 15
console.log(result2)
let result3 = addFive(37); // returns 42
console.log(result3)
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addFive;
} catch (e) {
  module.exports = null;
}
