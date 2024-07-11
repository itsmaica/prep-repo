/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

***********************************************************************/

// Your code here
const arrowMirrorArray = arr => {
  // ! need to reverse the array
  // create a shallow copy. if we don't, we will mutate the array.

  let shallowCopy = arr.slice()
  let shallowCopy2 = [...arr]
  // console.log(shallowCopy === arr)
  // console.log(shallowCopy2 === arr)

  let reversed = shallowCopy.reverse()
  // console.log(reversed)

  return [...arr, ...reversed]
}

console.log(arrowMirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
console.log(arrowMirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  module.exports = null;
}
