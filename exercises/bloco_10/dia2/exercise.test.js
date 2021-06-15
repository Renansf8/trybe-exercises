const { uppercase, getUserName } = require('./exercise.js');
const { it, describe, expect } = require('@jest/globals');

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

