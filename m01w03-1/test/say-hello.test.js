const sayHello = require('../say-hello');
const assert = require('assert');
// const assert = require('chai').assert;

describe('tests for the sayHello function', () => {

  it('returns "hello there alice" when given the string "alice"', () => {
    const actual = sayHello('alice');
    const expected = 'hello there alice';

    assert.strictEqual(actual, expected);
  });

  it('returns "hello" when given no arguments', () => {
    const actual = sayHello();
    const expected = "hello";

    assert.strictEqual(actual, expected);
  });

});
