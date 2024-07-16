/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.

This problems is expecting a single returned function that can be invoked until three arguments have been passed.
Arguments will be passed one a time. Until all three args have been gathered, it should return a function, that function being the closure function.
Once all three args are gathered it should return the product of those three values multiplied together.
Any subsequent calls, say a 4th or 5th should return the product.


***********************************************************************/

// Your code here
function recVolume(height) {
  //!!START
  // one way to solve this is to collect all of our ints in an array

  // initial val does in an array
  let dimensions = [height];
  // create an inner func called measure, and it takes in a num
  const _measure = (num) => {

    // want to collect all of our values into dimensions
    if (dimensions.length < 3) {
      dimensions.push(num);
    }
    // if all of our val are collected, then do this.
    if (dimensions.length === 3) {
      // g
      let prod = dimensions.reduce((acc, el) => (acc *= el));
      return prod;
    } else {
      return _measure;
    }
  };
  return _measure;
  //!!END
}


// Example 1:
let table1 = recVolume(5); // returns a function
table1(4); // returns a function
console.log(table1(3)); // prints 60
console.log(table1(145)); // STILL prints 60

// Example 3:
let table2 = recVolume(3); // returns a function
table2(2); // returns a function
console.log(table2(1)); // prints 6
console.log(table2(75)); // STILL prints 6

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
