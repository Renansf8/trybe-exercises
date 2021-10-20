const readline = require('readline-sync');

const name = readline.question('Qual seu nome?');
const age = readline.questionInt('Qual seu idade?');

console.log(`Hello, ${name}! You are ${age} years old!`);
