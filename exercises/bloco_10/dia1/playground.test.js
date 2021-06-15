const { compareTrue, calcArea, encode, decode } = require('./playground');
const { test, expect, describe } = require('@jest/globals');

//
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

//Exercício 3 - Teste se encode e decode são funções;
describe('function encode and decode', () => {
  test('verify type of functions', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  test('return of encode', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  test('return of decode', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  test('lentgh of return', () => {
    expect(encode('renan').length).toBe(5);
  });
}); 
