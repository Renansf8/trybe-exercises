const sum = require('./sum');

const { test, expect } = require('@jest/globals');

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});