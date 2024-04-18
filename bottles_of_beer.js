// const readline = require("readline");

// console.log(readline.createInterface)

/***********************************************************************
Write a RECURSIVE function, called `bottlesOfBeerOnTheWall` that accepts a
number (of beers on the wall) The function should count down from that number,
to 0 😞, printing the following out each time/round...

"4 bottles of beer on the wall...🍻"
"4 bottles of beer...🍻"
"Take one down and pass it around...🍺"
"3 bottles of beer on the wall...🍺"

The lines of song/text should print 1 line every 1 second to simulate the song
being sung...

When we reach 0, the following should print out:

"No more bottles of beer on the wall... 🥲"

Example:

bottlesOfBeerOnTheWall(2) // should print the following to the console:
2 bottles of beer on the wall...🍻
2 bottles of beer...🍻

Take one down and pass it around...🍺
1 bottles of beer on the wall...🍺
1 bottles of beer on the wall...🍻
1 bottles of beer...🍻

Take one down and pass it around...🍺
0 bottles of beer on the wall...🍺
No more bottles of beer on the wall... 🥲

Note the new line after each "round"...

Helper functions are a totally cool idea...

* Understanding the problem
1. Recursive function. Input will be a number
2. For each num, print out the song lines at a 1 second delay
3. After each round there should be new line
4. repeat that pattern until we're out of beer :(
5. 
***********************************************************************/


const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

// console.log(rl)

// instead of the default cb, we're going to add one of our own making.
rl.question('How many bottles of beers on the wall? ', bottlesOfBeerOnTheWall());

function bottlesOfBeerOnTheWall(num) {

}
