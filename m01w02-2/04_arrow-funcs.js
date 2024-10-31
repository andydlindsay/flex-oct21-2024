// ES6 November 2015 for..in, for..of, classes, .includes, arrow functions

// arrow functions are a shorter syntax alternative
// advantages:
// 1. no more function keyword yayay!!!!
// 2. if only one argument, no need for parens
// 3. if only one line of code, no need for curly braces
// 4. if no curly braces, the line of code is implicitly returned
// 5. arrow funcs DO NOT create the `this` variable

// implicit => the default/no need to mention it
// explicit => we have to tell the code to do it

const sayHello1 = function(name) {
  return `hello there ${name}`;
};

const sayHello2 = name => `hello there ${name}`;

const returnVal = sayHello2('bob');
console.log('returnVal', returnVal);
