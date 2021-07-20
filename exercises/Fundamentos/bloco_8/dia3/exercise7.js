const assert = require('assert');
const books = require('./books');

const expectedResult = 'O Senhor dos Anéis';

//Exercício 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
function authorWith3DotsOnName() {
  return books.find((book) => (
      book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3
  )).name
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);