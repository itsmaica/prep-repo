const makePromise = require('./test/pot-plant');

const addSoil = makePromise('addSoil');
const plantSeed = makePromise('plantSeed');
const growPlant = makePromise('growPlant');

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

// Your code here

// ! GOTTA RUN IN MOCHA TO SEE THE LOGS!
// console.log('soil -> \n',addSoil) // shows a func
// console.log('what dis? ', addSoil()) // Promise { true } -> a promise!!

// cannot be logged outside of the main func?
async function potPlant1(seed) {
  // console.log(addSoil)

  // addSoil()
  await addSoil() // * resolve it -> it returns a boolean
  console.log(await addSoil()) // this also works

  // what is plant seed?
  console.log('🌱',plantSeed(seed)) // Plant { seed: 'Basil', fullyGrown: false }

  // * Need to resolve it
  const plant = await plantSeed(seed)

  return growPlant(plant)

}

const potPlant = seed => {
  // ! MUST RETURN TO PASS THE LAST SPEC
  return addSoil()
    .then(() => plantSeed(seed))
    .then(plant => growPlant(plant))
}

// console.log(plantSeed)
// console.log(growPlant)


// potPlant()


/*******************************************************************************
 * Do not change code below this line.
 */

if (!exports) {
  var exports = {};
}
(function (exports) {
  try {
    exports.potPlant = potPlant;
  } catch (e) {
    exports.potPlant = () => { throw e };
  }
})(exports);
