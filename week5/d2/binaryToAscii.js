// * Translate the binary sequences in the
// * console.logs below to 8-bit ASCII strings:

/******************************************************************************/

// * 1. Understand the problem:
/*
    a. Binary is hard to read (don't do it by hand)
    b. Read binary (its in an ugly string format)
    c. Separate it in to individual bits
    d. Turn it in a readable text
*/
// * 2. Make a plan
/*
    1. split the string up in to chunks of 8 (8 bits is a byte)
        a. iterate through the string (for loop) use slice -> output to be an array
    2. after we have separate chunks, we convert binary to ascii string
        a. iterate through our array from the above
            - helper function to get num value
            - num value to a char code
   c. return result.
*/
//* 3. Execute the plan 😎

// his job is to split up the binary string inputs into processable bytes
const binaryArrayHelper = (str) => {
    let binaryArray = [];

    // console.log(str.length) // 24 / 8 = 3 bytes
    // need to process into bits of 8, utilize for loop for this
    for (let i = 0; i < str.length; i += 8) {
      // console.log(i)
      // slice up the string
      let sliced = str.slice(i, i + 8);
      // console.log({ sliced })
      binaryArray.push(sliced);

      // one line
      // binaryArray.push(str.slice(i, i + 8))
    }

    return binaryArray;
  };

  // console.log(binaryArrayHelper("011000010110001001100011")); // working as expected :D

  const binaryToAscii = (str) => {
    // we're return an ascii string. we'll be returning this later
    let asciiString = "";

    // get the resulting array
    let binaryArray = binaryArrayHelper(str);

    // iterate through it
    for (let ele of binaryArray) {
      // now that we have these chunks of 8, or bytes. the conversion starts now:
      let charCode = parseInt(ele, 2);
      // console.log({charCode})// => will return a decimal which matches a char on the ascii table

      // time to populate the res string
      asciiString += String.fromCharCode(charCode);
    }

    // console.log(asciiString)
    // profit 🤑
    return asciiString;
  };

  console.log(binaryToAscii("011000010110001001100011"));
  ("abc");
  console.log(binaryToAscii("010000010100001001000011"));
  ("ABC");
  console.log(
    binaryToAscii(
      "010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100"
    )
  );
  ("Hello, world");
