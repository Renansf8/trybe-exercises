const readlineSync = require('readline-sync');

const imc = (peso, altura) => {
    const index = (peso / (altura * altura)).toFixed(2);
    
    if (index < 18.5) {
        return `${index} - Abaixo do peso (magreza)`
    }
    else if (index >= 18.5 && index <= 24.9) {
        return `${index} - Peso normal`
    }
    else if (index >= 5 && index <= 29.9) {
        return `${index} - Acima do peso (sobrepeso)`
    }
    else if (index >= 30 && index <= 34.9) {
        return `${index} - Obesidade grau I`
    }
    else if (index >= 35 && index <= 39.9) {
        return `${index} - Obesidade grau II`
    }
    else if (index > 40) {
        return `${index} - Obesidade graus III e IV`
    }
};

const p = readlineSync.questionFloat('Qual o seu peso?\n');
const a = readlineSync.questionFloat('Qual a sua altura?\n');

console.log(imc(p, a));