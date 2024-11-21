// promiseOne   1000
// promiseTwo   2000
// promiseThree 3000
// in series/in sequence

const generatePromise = require('./generators/generate-promise');

const promiseOne = generatePromise('promise one', false, 1000);
const promiseTwo = generatePromise('promise two', false, 2000);
const promiseThree = generatePromise('promise three', false, 3000);

const promises = [promiseTwo, promiseThree, promiseOne];

const promiseHandler = (resultsArr) => {
  console.log(resultsArr);
}

Promise.all(promises)
  .then(promiseHandler)
  .catch((err) => {
    console.log('in the catch', err);
  })