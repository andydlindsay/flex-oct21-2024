// callback => a function that you pass to another function to be invoked (called) by that function
// higher order function (HOF) => a function that accepts another function as an argument

const runMyFunc = function(callback) {
  // console.log(callback.toString()); // console.log(sayHello);
  callback('alice'); // console.log('alice');
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

runMyFunc(sayHello);
runMyFunc(console.log);
