// key/value pairs
// const age = 42;
// console.log(42);
// console.log(age + 10);

// console.log(42000); // anonymous
// 42000 + 10

// console.log([])
// console.log({})

// naming things is hard

const runMyFunc = function(callback) {
  callback('alice');
};

// const sayHello = function(name) {
//   console.log(`hello there ${name}`);
// };

// runMyFunc(sayHello);

runMyFunc(function(name) {
  console.log(`good day ${name}`);
});
