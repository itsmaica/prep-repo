// const readline = require("readline");

// console.log(readline.createInterface)

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

// console.log(rl)

// instead of the default cb, we're going to add one of our own making. 
rl.question('How many bottles of beers on the wall? ', ());
