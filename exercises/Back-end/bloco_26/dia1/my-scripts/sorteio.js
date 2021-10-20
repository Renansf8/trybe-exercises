const readlineSync = require('readline-sync');

const resultado = (num, numSorteado) => {
    return num === numSorteado ? 'Parabéns, número correto!'
    : `Opa, não foi dessa vez. O número era ${numSorteado}`
}

const sorteio = () => {
    const numSorteado = Math.ceil(Math.random() * 10)
    const numero = readlineSync.questionFloat('Qual o número apostado?\n') 

    console.log(resultado(numero, numSorteado))

    const jogarNovamente = readlineSync.question('Deseja jogar novamente?\n')

    jogarNovamente === 'sim' ? sorteio() : console.log('Ok, até a próxima!')
}

sorteio()