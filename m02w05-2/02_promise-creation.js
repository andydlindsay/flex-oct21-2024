const myPromise = new Promise((resolve, reject) => {
  // long running operation

  // resolve is tied to the .then
  // resolve([{ a: 1, b: 2 }])

  // reject is tied to the .catch
  reject('file does not exist')
});

myPromise
  .then((val) => {
    console.log('inside the .then', val); // 42
  })
  .catch((err) => {
    console.log('inside the .catch', err);
  });
