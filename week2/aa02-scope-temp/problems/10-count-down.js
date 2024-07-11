/***********************************************************************
Write a function named: countDownTimer(n). This function will represent a count
down of days till the New Year. The countDownTimer function will
take in a number argument (n) the first time it is called and if that
number is greater than 0 the countDownTimer will return a function.

The function returned by countDownTimer can then be invoked n times before it
returns a string of "Happy New Year!". Look closely at how this function is
invoked below:


***********************************************************************/

// Your code here
const countDownTimer = (n) => {
  // n represents days.
  // 0 means it is new years day
  if (n === 0) return "Happy New Year!";

  // we don't want an anon func -> this needs to decrement n
  // if it is not new years day, we return a func to count down.
  const count = () => {
    // console.log("Happy New Year!")
    --n;
    if (n <= 0) {
      return "Happy New Year!";
    } else {
      return count;
    }
    // console.log(n, 'yo')
    console.log(n);
  };

  return count;
  // console.log('hello',n)
};

// // Example 1:
//   console.log(countDownTimer(0)); // prints "Happy New Year!"

// // Example 2:
let oneDay = countDownTimer(1); // returns a function
console.log(oneDay()); // prints "Happy New Year!"

// const countDownTimer = (n) => {
//   // n represents days
//   if (n === 0) return "Happy New Year!"
//   // returns a func if n is > 0
//   // we don't want an anon func -> this needs to decrement n
//   return () => {
//     --n
//     return "Happy New Year!"
//   }
// }

// // Example 3:
// let twoDays = countDownTimer(2); // returns a function
// console.log(twoDays()); // returns a function
// console.log(twoDays()); // prints "Happy New Year!"

// // Example 4:
// let threeDays = countDownTimer(3); // returns a function
// console.log(threeDays()); // returns a function
// console.log(threeDays()); // returns a function
// console.log(threeDays()); // prints "Happy New Year!"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = countDownTimer;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
