const fs = require('fs');
const sinon = require('sinon');

//Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":


const { expect } = require("chai");

const numFunc = require('./numFunc.js');

const writeArq = require('./writeArq');

describe('Testa a função', () => {
  describe('Se o número for maior que zero', () => {
    it('é uma string', () => {
      const resposta = numFunc(5);

      expect(resposta).to.be.a('string');
    });

    it('Deve retornar "positivo" ', () => {
      const resposta = numFunc(5);

      expect(resposta).to.be.equals('positivo');
    });

    describe("Se o parâmetro passado não for um número", () => {
      it('será uma string', () => {
        const resposta = numFunc("AA");

        expect(resposta).to.be.a('string')
      });

      it('deverá retornar "o parâmetro deve ser um número"', () => {
        const resposta = numFunc("AA");

        expect(resposta).to.be.equals('o parâmetro deve ser um número')
      })
    })
  })

  describe('Se o número for menor que zero', () => {
    it('é uma string', () => {
      const resposta = numFunc(-5);

      expect(resposta).to.be.a('string');
    });
    
    it('Deve retornar "negativo" ', () => {
      const resposta = numFunc(-5);

      expect(resposta).to.be.equals('negativo');
    });
  })

  describe('Se o número for igual que zero', () => {
    it('é uma string', () => {
      const resposta = numFunc(0);

      expect(resposta).to.be.a('string');
    });

    it('Deve retornar "neutro" ', () => {
      const resposta = numFunc(0);

      expect(resposta).to.be.equals('neutro');
    });
  })
})

// 4 - Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
// Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
// Após concluir a escrita do arquivo ela deverá retornar um ok .


describe('Testa a função de escrita', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('o retorno da função', () => {
    it('é uma string', () => {
      const resposta = writeArq('arquivo.txt', 'qualquer conteúdo');

      expect(resposta).to.be.a('string');
    });

    it('é igual a ok', () => {
      const resposta = writeArq('arquivo.txt', 'qualquer conteúdo');

      expect(resposta).to.be.equals('ok')
    })
  })
})