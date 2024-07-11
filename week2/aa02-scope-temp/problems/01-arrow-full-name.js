/***********************************************************************
Write a function using fat arrow syntax, `arrowGetFullName(person)` that takes in
a person object and returns a string containing their full name.

Assign the below function to a variable using the const keyword. Using the const
keyword will allow any value assigned to that variable protection from being
reassigned within that scope.

Examples:

***********************************************************************/

// Your code here
// ! one liner
// ! takes in a person obj, key in using the keys in the ex person obj.
// ! using string interpolation
const arrowGetFullName1 = person => `${person.firstName} ${person.lastName}`

const arrowGetFullName = (person) => {
  // console.log(person) see the person obj.

  //! here using concat, need to manually account for the space. 
  return person.firstName + " " + person.lastName
};

let p1 = { firstName: "John", lastName: "Doe" };
arrowGetFullName(p1); // => 'John Doe'
console.log(arrowGetFullName(p1));
let p2 = { firstName: "Charlie", lastName: "Brown", age: 9 };
arrowGetFullName(p2); // => 'Charlie Brown'
console.log(arrowGetFullName(p2));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowGetFullName;
} catch (e) {
  module.exports = null;
}
