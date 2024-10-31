// single responsibility principle (SRP) => our code (functions) should be responsible for only one thing

const loopOverArray = function(arr, callback) {
  // loop over the provided array
  for (const element of arr) {
    // perform a task with each element
    // console.log(element);
    callback(element);
  }
};

// const pets = ['cat', 'dog', 'monkey'];
// const doOnEachLoop = function(animal) {
//   console.log(`${animal} is the best type of animal`);
// };

// loopOverArray(pets, doOnEachLoop);

const names = ['alice', 'bob', 'carol'];
const namesDoOnEachLoop = function(name) {
  console.log(`${name} is a good name`);
};

loopOverArray(names, function(name) {
  console.log(`${name} is a good name`);
});

console.log();

names.forEach(namesDoOnEachLoop);

// callback hell (heck) - Promises
higherOrderFunction(function() {
  higherOrderFunction(function() {
    higherOrderFunction(function() {

    });
  });
});
