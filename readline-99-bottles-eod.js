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

Understanding the problem~!
1. Recursive function. Input will be a number
2. For each num, print out the song lines a 1 second delay
3. After each round there should be a new line
4. Repeat the pattern until we run out beer :(
5. When there is no more beer, print No more bottles of beer on the wall... 🥲

Plan it out!
1. Identify the base case: num === 0
    a. console.log(No more bottles of beer on the wall... 🥲)
    b. return / stop recursing
2. The Recursive Step: decrement num || num -= 1
    a. console.log('num of beers on the wall')
    b. 1 second needs to pass between each line
    c. An empty line after round

    Recursive Call
3. setTimeout(bottleOfBeerOnTheWall, 1000, num)

*/
// lets setup our readline! 
const readline = require("readline");

// console.log(readline.createInterface)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// // ask the user a question
// rl.question("What's up, doc? ", (answer) => {
//   // print their response
//   console.log("you responded: " + answer);
//   // close the interface
//   rl.close();
// });

rl.question("How many bottles of beer on the wall? ", bottlesOfBeerOnTheWall);

// Helper function to deal with the string input from the user.
// Utilize the "Number method"
const StrConverter = (str) => {
  return Number(str);
};

function bottlesOfBeerOnTheWall(num) {
  // console.log('NUM :', typeof num)
  // if (typeof num === 'string') num = StrConverter(num)

  if (typeof num === "string") num = +num;

  // console.log('🎯',typeof num)

  if (!num) {
    console.log("No more bottles of beer on the wall... 🥲");
    rl.close();
    return;
  }

  // lets account for the singular beer
  if (num === 1) {
    console.log(`${num} bottle of beer on the wall...🍺`);

    setTimeout(console.log, 1000, `${num} bottle of beer...🍺`);
  } else {
    //opening line
    console.log(`${num} bottles of beer on the wall...🍻`);

    // following line
    setTimeout(console.log, 1000, `${num} bottles of beer...🍻`);
  }

  // set the gap or line between each round
  setTimeout(console.log, 1000, "");

  // before decrement
  setTimeout(console.log, 3000, "Take one down and pass it around...🍺");

  // // decrement the number of beer
  // setTimeout(console.log, 4000, `${num -= 1} beers on the wall...🍺`)

  if (num === 2) {
    setTimeout(
      console.log,
      4000,
      `${(num -= 1)} bottle of beer on the wall...🍺`
    );
  } else {
    setTimeout(
      console.log,
      4000,
      `${(num -= 1)} bottles of beer on the wall...🍻`
    );
  }

  // we want a 5000 delay
  setTimeout(bottlesOfBeerOnTheWall, 5000, num);
}
