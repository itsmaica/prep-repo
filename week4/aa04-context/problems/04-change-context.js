function changeContext(func, obj) {
  // Your code here

  // console.log(func.bind(obj))// returns a func
  // also works
  // return func.bind(obj)()

  // return func.bind(obj)

  //save to a variable
  let boundFunc = func.bind(obj);
  return boundFunc();


}

class Person {
  constructor(name) {
    this.name = name;
  }
}

function extractName() {
  return this.name;
}

const kristen = new Person('Kristen');
console.log(changeContext(extractName, kristen)); // => Kristen

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
