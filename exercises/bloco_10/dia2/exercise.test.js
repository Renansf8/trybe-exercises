const { uppercase } = require('./exercise.js');
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