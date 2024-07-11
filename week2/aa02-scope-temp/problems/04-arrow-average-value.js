/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

***********************************************************************/

// Your code here
const arrowAvgValue = arr => {
  // ! to find the avg, we need to add all of the els in the arr together and then divide the 
  let sum = arr.reduce((acc, curr) => acc + curr, 0)
  // console.log(sum)

  return sum/arr.length;
}


console.log(arrowAvgValue([10, 20])); // => 15
console.log(arrowAvgValue([2, 3, 7])); // => 4
console.log(arrowAvgValue([100, 60, 64])); // => 74.66666666666667
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowAvgValue;
} catch (e) {
  module.exports = null;
}
