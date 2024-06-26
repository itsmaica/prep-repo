/***********************************************************************
Write a function using fat arrow syntax, `sentenceMaker` that
takes in any number of arguments as strings, and create a sentence out
of it. You may assume that all arguments will be strings. Add an exclamation
mark at the end of the sentence.

Examples:

***********************************************************************/

// Your code here
const sentenceMaker = (...args) => args.join(" ") + '!'

console.log(sentenceMaker('Hello', 'World')); // 'Hello World!'
console.log(sentenceMaker('I', 'love', 'coding')); // 'I love coding!'
console.log(sentenceMaker('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog')); // 'The quick brown fox jumps over the lazy dog!'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = sentenceMaker;
} catch (e) {
	module.exports = null;
}
