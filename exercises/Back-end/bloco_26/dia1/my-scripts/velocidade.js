const readlineSync = require('readline-sync');

const vs = (v, t) => `${v / t} m/s`;

const speed = readlineSync.questionFloat('Qual a velocidade?\n');
const time = readlineSync.questionFloat('Qual o tempo?\n');

console.log(vs(speed, time));