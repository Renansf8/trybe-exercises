const { compareTrue, calcArea } = require('./playground');
const { test, expect, describe } = require('@jest/globals');

describe('Playground functions', () => {
  test('compare two values', () => {
    expect(compareTrue(1, 1)).toBe(true);
    expect(compareTrue(0, 1)).not.toBe(true);
  });

  test('verify area', () => {
    expect(calcArea(2, 4)).toBe(4);
    expect(calcArea(3, 4)).toBe(6);
  });
});

