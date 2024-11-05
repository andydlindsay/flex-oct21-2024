const sayHello = (name) => {
  // if (!name) {
  if (name === undefined) {
    return 'hello';
  }

  return `hello there ${name}`;
};

module.exports = sayHello;

// module.exports = [sayHello, age]

// module.exports = {
//   sayHello: sayHello,
//   age: age,
// }
