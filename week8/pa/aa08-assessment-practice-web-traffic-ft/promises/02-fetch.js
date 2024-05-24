if (!fetch) {
  var fetch = require("./test/node-fetch")(1);
}

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

// Your code here
// * Two ways to go about this, can write a straight up fetch, or put it inside of a function


const options = {
  method: "PUT",
  headers: {
    "Content-Type":"application/json"
  },
  body: JSON.stringify({
    "color": "green"
  })
}

fetch("/colors/1", options).then(res => {

  console.log('res',res) // ! whole ass response body obj. we can't work this yet. this is lik raw materials, we need to refine it with .json()

  // * if we multi line, gotta explicitly return this bitch

  // ! returns a promise Promise { { id: 1, color: 'green' } }
  // * .json is particular to the response object. This returns a promise read all about it.

  // https://developer.mozilla.org/en-US/docs/Web/API/Response/json
  return res.json()

}).then(resBody => console.log(resBody))

// ! write this in a function and utilize async
const goFetch2 = async () => {
  // await this fetch, and save its result
  const response = await fetch("/colors/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      color: "green",
    }),
  });

  // console.log(res); // ! returns the response object, so we need to .json our raw materials
  const data = await response.json(); // ! don't put semi colon???
  console.log(data);
};

// ! To pass specs you must invoke the function
goFetch2()
