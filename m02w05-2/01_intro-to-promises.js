const generatePromise = require('./generators/generate-promise');

// that returns a promise object
// resolve/fulfill successfully after 1000ms

const promiseObj = generatePromise('first promise', true);

console.log(promiseObj);

// .then is happy path the promise resolved successfully
// .catch is unhappy path; when the promise rejects/fails
promiseObj
  .then((resolvedValue) => {
    console.log('inside the .then', resolvedValue);
  })
  .catch((err) => {
    console.log('inside the .catch', err);
  })


// higherOrderFunct((err, data) => {
//   if (err) {
//     // handle error
//   }
//   higherOrderFunct((err, data) => {
//     if (err) {
//       // handle error
//     }
//   })
// })