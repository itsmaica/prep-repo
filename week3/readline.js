// const readline = require("readline");


//  const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//  });


//  rl.question("What's up, doc?", answer => {
//     console.log("you responded: " + answer);
//     rl.close();
//  });

//  console.log("DONE!");


// what is readline?? a module or package of JavaScript that comes with Node.
// provides cool functionality where users can interact.

// no need to download anything fancy, we simply have to import readline into our file by using 'require'.

const readline = require("readline")

// it's an object full of methods aka functions
// console.log(readline)
// notice how useful createInterface is. We should use that!


//we can key into those methods. Don't invoke yet..
// console.log(readline.createInterface)

//Lets check out the docs and see how to use it from here
//I know that readline accepts two things, input and output
// see createInterface promises part
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

// look up question in the docs
// notice how it takes in a call back function.
// We use this method to "ask how many beers on the wall"
// we know that we can pass informathion to the function. we will pass in the amount of bottles
// rl.question("How ya doin?", answer => {
//  console.log("You are feeling.." + answer)

//  // need to end the conversation with rl.close
//  rl.close();
// })


// We will create a new function for the 'question method' to use.
rl.question("How many bottles of beers on the wall? ", bottlesOfBeerOnTheWall)


function bottlesOfBeerOnTheWall(num){
   // console.log(num)


   // rl.close()H\


   // need to deal with the input being a string by using unary operator
   if (typeof num === 'string') {
      num = +num

      // console.log('hey I am num:',typeof num)
   }

   // here come the base cases

   //1.
   // when there is no num.
   // can test this in readline!
   if (!num) {
   // if (num === 0) {
      //
      console.log("No more bottles of beer on the way... 🥲");
      // In this case, we can just close the readline
      rl.close();
      return
   }

   //6. when num is 1. Its a special annoying case
   if (num === 1) {
      // console.log('num 1', num)
   console.log(`${num} bottle of beer on the wall...🍺`)

   setTimeout(console.log, 1000, `${num} bottle of beer...🍺`)

   // in the case when num is > than 1
   } else {

   console.log(`${num} bottles of beer on the wall...🍺`)


   setTimeout(console.log, 1000, `${num} bottles of beer...🍺`)
   }


   // the start of the song goes like this: "100 bottles of beer on the wall...🍻"
   // 2. Song starts off with x amount bottles of beer in the wall

   // console.log(`${num} bottles of beer on the wall...🍺`)

   //3. the follow up part that kinda echoes
   // "100 bottles of beer...🍻"
   // setTimeout(console.log, 1000, `${num} bottles of beer...🍺`)

   //3.a delay song even more.
   setTimeout(console.log, 2000, "");

   //4. next part of the song goes like
   // "Take one down and pass it around...🍺"
   setTimeout(console.log, 3000, "Take one down and pass it around...🍺")


   //5. Need to subtract from the original number. Should come after Take one down and pass it around
   // extend the time
   // should read as plural bottles
   // if (num > 4) {

   // }
   if (num === 2) {
      // setTimeout(console.log, )
   setTimeout(console.log, 4000, `${num -= 1} bottle of bear on the wall...🍺`)

   // delayed time needs to match
   // setTimeout(console.log, 4000, `${num} bottle of beer...🍺`)


   } else {

      setTimeout(console.log, 4000, `${num -= 1} bottles of bear on the wall...🍺`)
   }

   // setTimeout(console.log, 1000, `${num} bottles of beer...🍺`)


   //7. recursive call!
   // extend the time

   setTimeout(bottlesOfBeerOnTheWall, 5000, num)

}
