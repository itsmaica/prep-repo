function bindToAnArg(func, arg) {
  // Your code here
  const newFunc = bind.bind(arg);

  return newFunc()
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
