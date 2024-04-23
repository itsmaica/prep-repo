/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will take
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

input: string
output: array

1. helperfunc?
* takes in a string
* name suggests that it will count all of the chars of the string
* will use the result in dupCharMin
- iterate through the string
- store out results in an obj. if `a` appears 3x => { a : 3 } counter obj!


2. Main func
- define res array
- find the chars that appear at least min times in the counter obj
- iterate through the obj
- see if the kv pair values >= minCount
	- push key into res array
- return results in an array

***********************************************************************/

function countCharacters(string) {
  // Your code here
  let counter = {};

  for (const char of string) {
    if (!counter[char]) {
      counter[char] = 1;
    } else {
      counter[char]++;
    }

    // console.log(char, counter)
  }

  return counter;
}

// console.log(countCharacters("What about a longer string?"))

function duplicateCharMinCount(string, minCount) {
  // Your code here
  // declare result array here
  const res = [];
  const counterObj = countCharacters(string);

  //iterate through the counterObj

  for (const key in counterObj) {
    const value = counterObj[key];
    // console.log(key, value)
    if (value >= minCount) {
      res.push(key);
    }
  }

  console.log(res);
  return res;
}

duplicateCharMinCount("apple", 2); // ["p"]
duplicateCharMinCount("banana", 2); // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3); // ["a", "t", " "]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
