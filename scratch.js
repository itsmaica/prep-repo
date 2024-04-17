// shallow vs deep copy
// make an obj
const pet = {
  name: "Pepper",
  alias: "Pepita",
  owner: "Maica",
  traits: ["black fur", "female", "nocturnal"],
  diet: "Omnivorous",
  toys: {
    wheel: true,
    hideaways: true,
    chews: true,
    teats: true,
  },
};

console.log("Original copy: ", pet); // pet <ref1>

//make a copy
// we will point another variable at the same ref in memory
let pet2 = pet; // two references pointing at the same variable
// pet2 -> <ref1>

//compare their features
// are they the same references?
console.log("copy vs. og", pet2 === pet); // true! - same ref in memory
// <ref2> === <ref1>

//when comparing objects, we are comparing references. They look the same, but they're not.
const fakePet = {
  name: "Pepper",
  alias: "Pepita",
  owner: "Maica",
  traits: ["black fur", "female", "nocturnal"],
  diet: "Omnivorous",
  toys: {
    wheel: true,
    hideaways: true,
    chews: true,
    teats: true,
  },
};

// fake pet -> <ref2>
// is the fake pet the same ref as pet?
// no - not the same ref in memory
console.log(`fake vs og`, fakePet === pet); // false
// <ref1> === <ref2> false

// shallow copy - is a new object/array that is created to reference the same elements as an existing obj/array
// however, with a shallow copy, if the obj/arr contains nested objs/arrs
// a shallow copy will keep a ref to old obj/arr

// ways to make shallow copies
//.slice()
// spread - [...arr] - easiest way

let shallowPet = { ...pet };
// shallow pet -> <ref3>

console.log(shallowPet); // contains same key:values

// is the shallow pet the same ref as the pet?
// no - a shallow copy was made with spread
console.log("shallow vs og", shallowPet === pet); // false
// <ref1> === <ref2> false

//! but a shallow copy will keep a ref to any nested obj/arr
// lets look!
//we know these are not the same ref when we compared them
console.log("shallow vs og", shallowPet === pet); // false
// however it is only a SHALLOW COPY
// lets demonstrate what a shallow copy is

//comparing a nested arrays ref
console.log("dem traits", shallowPet.traits === pet.traits);
//<ref1:[ <refA>, <refB> ]> === <ref3:[ <refA>, <refB> ]>
//          ^        ^                    ^       ^
//        traits            ===         traits
//                  same nested reference
// how do we fix this?
// how to create an entirely new copy?
// we can create a deep copy
// what is a deep copy?
// a deep copy!

let deepCopyPet = JSON.parse(JSON.stringify(pet));

// check if the deepCopyPet is a copy one level deep
console.log("deepCopyPet vs pet", deepCopyPet === pet); // false

// lets check two levels deep. FIXED!
console.log(deepCopyPet.traits === pet.traits); // false
// no longer looking at the same reference in memory
// <ref1:[ <refA>,<refB> ]> === <ref3: [<refC>, <refD>]>
//          ^        ^                    ^       ^
//        traits            ===         traits
//              different nested reference

/*
A shallow copy makes a copy of the reference to X (an array), into Y.
If we were to say something like this for example:

let x = [ [1], [2, 3] ];
let y = x.slice();

In this situation, Y, is a shallow copy of X. Here both X's and Y's VALUES point to the
same place in memory. But hold on you might say, "I just checked y === x is false", while
that is true, what if I told you that x[0] === y[0] is true? Both x[0] and y[0] evaluate to [1] AND
they also share the same memory address that gives us an array of just the number 1 inside.
So for the sake of testing that our addresses are different we will use nested arrays in our
examples to know if our deep duplication has succeeded. You might have already guessed that
since we used 'slice' in the example above that 'slice' creates a shallow copy, and you are
correct. For this problem we duplicate our original array so that our function returns a new
array with different memory addresses.

Write a function, deepDup(arr), that deeply duplicates a given array. Your duplicated array,
when compared to various indexes of the original array, should evaluate to false like below.

Examples:

let arr = [[1], [2, [3]]];
duped = deepDup(arr); // [[1], [2, [3]]]
arr[0] === duped[0] // false
arr[1] === duped[1] // false
arr[1][1] === duped[1][1] // false

Note:
if you compare a 1 dimensional array of numbers like below,
you will get 'true' because we are comparing numbers.
let x = [1, 2, 3];
let y = x.slice();
console.log(x[0] === y[0]) // true

*/
let arrExample = [[1], [2, [3]]];
let arrExample2 = [...arrExample];
console.log(arrExample === arrExample2); //false
console.log(arrExample[0] === arrExample2[0]); //true - want this to be false, want new reference in memory

//segway from deep dup or shallow vs deep copy
function deepDup(arr) {
  let dupArr = []; //new reference in memory
  //iterate through arr
  debugger;
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      //check if element is an array
      //if (ele instanceof Array)
      debugger;
      dupArr.push(deepDup(ele)); //if it is send to our deep function to again iterate
    } else {
      debugger;
      dupArr.push(ele); //else push the ele into the new array
    }
  }
  debugger;
  return dupArr; //return new reference to use in new copy
}

let arr = [[1], [2, [3]]];
duped = deepDup(arr); // [[1], [2, [3]]]
arr[0] === duped[0]; // false
arr[1] === duped[1]; // false
arr[1][1] === duped[1][1]; // false
console.log("deep dup", duped, arr[0] === duped[0]);

// console.log(flatten([1, [2, [3]]]));

//=======================================

function sort(nums, sorted = []) {
  // base case : all numbers are in the sorted array
  if (!nums.length) return sorted;

  // Find the smallest number in the nums array
  let minIndex = 0;
  for(let i = 0; i < nums.length; i++){
    if (nums[i] < nums[minIndex]) {
      minIndex = i;
    }
  }

  // add the smallest number to the end of the sorted array
  sorted.push(nums[minIndex]);

  //remove the smallest number from the nums array
  nums.splice(minIndex, 1);

  //recursively call sort with the new array
  return sort(nums,sorted)
}

console.log(sort([4, 1, 6, 3, 1, 7])); // [1, 1, 3, 4, 6, 7]
