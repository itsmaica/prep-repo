/***********************************************************************
Write a function named: coinCollector(numCoins). The coinCollector function will
accept a number of coins (greater that 0) to collect when it is first invoked
and will return a function. The function returned by coinCollector can then be
invoked numCoins number of times passing in one coin (represented by an int) to
be added to the collection.

Once the function returned by coinCollector has the numCoins required it will
return an array of the coins it has gathered.


***********************************************************************/

// Your code here
function coinCollector(numCoins){
  // numCoins tells us how many to collect

  // need an array to return that represents our collection
  const collection = [];

  // inner function gets the coin, and adds it to collection
  const _coinCollector = (int) => {
    // console.log('int ->',int)

    //collect it
    collection.push(int)

    // our job is done when our collection has numCoins worth of elements
    if (numCoins === collection.length) {
      return collection
    }

    // console.log('->',collection)
    // we need to return the inner function if we're not done
    return _coinCollector
  }

  return _coinCollector;

}


// Example 1:
  // let oneCoin = coinCollector(1); // returns a function
  // console.log(oneCoin(10)); // prints [10]

// // Example 2:
  let twoCoins = coinCollector(2); // returns a function
  twoCoins(25); // returns a function
  console.log(twoCoins(10)); // prints [25, 10]

// Example 3:
  let threeCoins = coinCollector(3); // returns a function
  threeCoins(25); // returns a function
  threeCoins(5); // returns a function
  console.log(threeCoins(10)); // prints [ 25, 5, 10 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = coinCollector;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
