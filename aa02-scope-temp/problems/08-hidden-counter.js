/***********************************************************************
Write a function named `hiddenCounter()`. This function will do two things - first
it will define a count variable, then it will return a function.
When invoked the function returned by hiddenCounter will increment the counter by 1.

Look below to see how this function is invoked:



***********************************************************************/

// Your code here


const hiddenCounter = () => {
  // let count = 0;
  // return () => count+=1

  let count = 0;
  return () => (++count);

}

// console.log(count)
// function hiddenCounter(){
//   let count = 0;

//   return function(){count += 1}
// }

let hidden1 = hiddenCounter(); //returns a function
console.log(hidden1()); // returns 1
console.log(hidden1()); // returns 2

let hidden2 = hiddenCounter(); // returns a function
hidden2(); // returns 1
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = hiddenCounter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
