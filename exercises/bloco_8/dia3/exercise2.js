const assert = require('assert');

const books = require("./books");

//Exercício 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
const expectedResult = [
    {
      age: 31,
      author: 'Isaac Asimov',
    },
    {
      age: 38,
      author: 'H. P. Lovecraft',
    },
    {
      age: 39,
      author: 'Stephen King',
    },
    {
      age: 43,
      author: 'George R. R. Martin',
    },
    {
      age: 45,
      author: 'Frank Herbert',
    },
    {
      age: 62,
      author: 'J. R. R. Tolkien',
    },
  ];
  
  function nameAndAge() {
    const authorsInfo = books.map((book) => {
        return {
            age: book.releaseYear - book.author.birthYear,
            author: book.author.name
        }
    });
    return authorsInfo.sort((ageA, ageB) => ageA.age - ageB.age);
  }
  
  assert.deepStrictEqual(nameAndAge(), expectedResult);