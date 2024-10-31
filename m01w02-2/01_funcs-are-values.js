
// function declaration
// function myFunc() {
//   console.log('inside the function');
// };

// hoisting

// first class => functions are valid values on their own

// function expression
const myFunc = function() {
  console.log('inside myFunc');
  return 'hello world';
};

const functions = [];

functions.push(myFunc);
functions.push(console.log);

console.log(functions);

console.log(functions[0]); // myFunc
console.log(functions[0]()); // myFunc()

// functions are objects
// console.log(myFunc) // get back the function itself
// console.log(myFunc()); // get back the return value from the function

// myFunc.secretKey = 'hello world 2';

// console.log(myFunc.secretKey);

// const copy = myFunc;
