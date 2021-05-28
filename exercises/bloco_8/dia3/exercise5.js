const assert = require('assert');
const books = require('./books');

//Exercício 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
const expectedResult = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ];
  
  function fantasyOrScienceFictionAuthors() {
    const fictionAuthors = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
    return fictionAuthors.map((author) => author.author.name).sort();
  }
  
  assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);