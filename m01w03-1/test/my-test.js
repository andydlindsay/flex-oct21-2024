// describe(); // optional; creates a heading/separator
// it(); // this is the test

const assert = require('assert');

describe('general tests for mocha', () => {

  // if your callback runs without error, the test passes
  // if your callback errors out for any reason, the test fails
  it('runs without error', () => {
    assert.strictEqual(2, 2); // '2' !== 2
  });

});
