//Exercício 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
//Use o parâmetro rest

const assert = require('assert');

// escreva sum abaixo
const sum = (...numbers) => {
  let total = 0;
  numbers.forEach((number) => total += number);
  return total;
};

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);