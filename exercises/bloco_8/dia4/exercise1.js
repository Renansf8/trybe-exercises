//Exercício 1 - Dada uma matriz de matrizes, transforme em uma única matriz.
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
 return arrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  });
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);