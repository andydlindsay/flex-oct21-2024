const bcrypt = require('bcryptjs');

// bcrypt.genSalt(10, (err, salt) => {
//   console.log('salt', salt);
//   bcrypt.hash('hello', salt, (err, hash) => {
//     console.log('hash', hash);
//   });
// })

bcrypt.genSalt(10)
  .then((salt) => {
    console.log('salt', salt);
    return bcrypt.hash('hello', salt);
  })
  .then((hash) => {
    console.log('hash', hash);
  });

console.log('below the salt call');

// const salt = bcrypt.genSaltSync();

// console.log('salt', salt);

// const hash = bcrypt.hashSync('hello', salt);

// console.log('hash', hash);

// 'hello'
// const storedPassword = '$2a$10$wfoLYGHFCN2SPtaOYkHa7etl6XBtKh.9RNSVC3T2B4Bf/QJOy87La';

// const result = bcrypt.compareSync('hello', storedPassword);

// console.log('result', result);
