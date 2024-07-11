/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will
accept a word and return a function. When the function returned by interrupter
is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:


Invoking the interrupter function again:
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"

1. write func. takes in word and returns a func
2. purpose is to return a string with interruptions.
3. notice patterns, anything useful in the cases.


***********************************************************************/

// Your code here
// 1. make a func
const interrupter = (intrWord) => {
  // 2. return a func, can be anon. can add a name to it if we need to call that inner func again, but if we don't it can be anon.
  return (sentence) => {
    // 3. this is the func being saved to rudePerson var below.
    // - takes in a sentence string, and returns a new sentence full of interruptions
    // i. turn the string into an array to make it easier to work
    let words = sentence.split(" "); //
    // console.log(words); // [ 'how', 'are', 'you' ]

    // create a result variable, and set to empty string
    let newString = "";

    // iterate through the words arr
    for (let i = 0; i < words.length; i++) {
      let word = words[i];

      // need to do a check here to find the end. don't want to add more.
      if (i === words.length - 1) {
        newString += word;
      } else {
        // we are still in the sentence
        newString += word + " " + intrWord + " ";
      }
    }

    //finally, return the result string.

    return newString;
  };
};

let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = interrupter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
