/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the function to a variable using the const keyword and
arrow function syntax.

**Hint**: Use rest parameter syntax!

Examples:
***********************************************************************/

// Your code here
// ! one liner using reduce to get sum
const arrowRestSum1 = (...args) => args.reduce((acc, curr) => acc + curr, 0)

const arrowRestSum = (...args) => {
  // create a res variable;
  let res = 0;
  //
  // args.forEach(num => res += num)

  for (let num of args) {
    res += num;
  }

  return res
}

console.log(arrowRestSum(3,5,6)); // => 14
console.log(arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
console.log(arrowRestSum(0)); // => 0

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  module.exports = null;
}
