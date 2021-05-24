const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(4, 5), 9, '4 mais 5 é igual à 9');
assert.strictEqual(sum(0, 0), 0, '0 mais 0 é igual à 0');
assert.strictEqual(sum(4, '5'), 0, '0 mais 0 é igual à 0');