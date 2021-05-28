const assert = require('assert');
const books = require('./books');

//Exercício 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  const oldestBooks = books.filter((book) => 2021 - book.releaseYear > 60);
  return oldestBooks.map((book) => book.name);
};

assert.deepStrictEqual(oldBooks(), expectedResult);