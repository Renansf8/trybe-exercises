const { uppercase, getUserName } = require('./exercise.js');
const { it, describe, expect } = require('@jest/globals');
const fetch = require('node-fetch');

//Exercício 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falsos positivos em testes assíncronos.
describe('Testa a função uppercase', () => {
  it('Verifica o retorno', (done) => {
    uppercase('test', (str) => {
      expect(str).toBe('TEST');
      done()
    })
  });
});

//Exercício 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

// describe('Caso o ID seja encontrado', () => {
//   it('Retorna o nome do usuário', () => {
//     expect.assertions(1);
//     return getUserName('4').then(name => {
//       expect(name).toBe('Mark')
//     });
//   });
// })

// describe('Caso o ID não seja encontrado', () => {
//   it('Retorna um erro', () => {
//     expect.assertions(1);
//     return getUserName(1).catch(name => {
//       expect(name).toEqual()
//     });
//   });
// });


//Exercício 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .

describe('Caso o ID seja encontrado', () => {
  it('Retorna o nome do usuário', async () => {
    const name = await getUserName('4')
    expect(name).toBe('Mark')
  });
})

describe('Caso o ID não seja encontrado', () => {
  it('Retorna um erro', async () => {
    try {
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 1 not found.' })
    }
  });
});

//Exercício 4 - O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.


const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

it('gets a list of repositories names', () => {
  const url = 'https://api.github.com/orgs/tryber/repos';

  return getRepos(url).then(result => {
    expect(result).toContain('sd-01-week4-5-project-todo-list');
    expect(result).toContain('sd-01-week4-5-project-meme-generator');
  });
});