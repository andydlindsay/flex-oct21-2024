const generatePromise = require('./generators/generate-promise');

const promiseOne = generatePromise('promise one');

// what is their ip address
// what is the street address of that ip

// every .then returns a new promise
// every .catch returns a new promise
// .finally runs once the entire promise chain is done (success or failure)

generatePromise('promise one')
  .then((result) => {
    console.log('inside the first .then', result); // 'promise one'
    return generatePromise('promise two');
  })
  .then((val) => {
    console.log('inside the second .then', val); // 'promise two'
    return 42;
  })
  .then((val) => {
    console.log('inside the third .then', val); // 42
  })
  .catch((err) => {
    console.log('inside the catch', err);
    return 'some happy path thing';
  })
  .finally(() => {
    console.log('i always run');
  });
  