/*
plan:

input: binary blob
output: ascii strings

need to separate into individual bits

- split the string into chunks of 8
  - iterate through string (for loop) use slice output to be an arr
- after we have seperate chunks we convert binary to ascii string
  - iterate through our array from the above
    - helper func to get num val
    - num val to char code

*/
// helper func that splits the blob into 8
const binaryToArray = str => {
  let bin = [];

  for (let i = 0; i < str.length; i+=8){
    // bin.push()
    console.log(i) // see the indexes we want to see

    let chunk = str.slice(i,i+8)
    // console.log(chunk)
    bin.push(chunk)

  }

  return bin;
}

// console.log(binaryToArray('010000010100001001000011'))

function binaryToString(binaryBlob) {
  // Your code here
  let asciiString = "";

  let binArr = binaryToArray(binaryBlob)

  binArr.forEach(ele => {
    let charCode = parseInt(ele, 2) // base 2 -> turn into numbers
    console.log('charCode', charCode)
    let character = String.fromCharCode(charCode) // use charCode -> this converts to ascii chars
    console.log("character", character)
    asciiString += character // join the chars into a return string
  });

  return asciiString;

}

/* Comment in the code below to run local tests */
console.log(binaryToString('010000010100001001000011')); // 'ABC'
// console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;
