// __test__/sum-test.js
'use strict';

jest.dontMock('../sandbox/sum');

describe('Returns the result of adding 2 numbers', function() {
  it("Adds 1 + 2 to equal 3", function() {
    var sum = require('../sandbox/sum');
    expect(sum(1, 2)).toBe(3);
  });
});
