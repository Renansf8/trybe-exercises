let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 1 - percorra o array imprimindo todos os valores nele contidos com a função console.log() 
// 1 - Declarar o array
// 2 - Criar um loop para percorer o array
// 3 - Imprimir o resultado
for (let num of numbers) {
    console.log(num);
}

//Exercício 2 - some todos os valores contidos no array e imprima o resultado;
// 1 - Declarar o array
// 2 - Declar uma variável que vai conter a soma dos números, com o valor 0
// 3 - criar um loop que percorra o array
// 4 - Incrementar a variável com o valor de cada loop
// 5 - Imprimir o resultado
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
}
console.log(soma);

//Exercício 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// 1 - Declarar o array
// 2 - Declarar uma variável que vai contar o resultado, com o valor 0
// 3 - Criar um loop que vai percorrer o array
// 4 - Incrementar a variável com o valor de cada loop
// 5 - Criar uma variável que calcule a media 
// 6 - Imprimir o resultado da media
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
}
let media = soma / numbers.length
console.log(media);

//Exercício 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// 1 - Declarar o array
// 2 - Declarar uma variável que vai conter o valor da soma. começando com 0
// 3 - Criar um loop que percorra o array
// 4 - Incrementar a váriavel da soma com o valor de cada loop
// 5 - Criar uma variável que calule a média
// 6 - Criar uma estrutura de condição
// 7 - Colocar a primeira condição e imprimir o valor correspondente
// 8 - Colocar a segunda condição e imprimir o valor correspondente
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
}
let media = soma / numbers.length
console.log(media)
if (media > 20) {
    console.log('Valor maior que 20')
} else {
    console.log('valor menor que 20');
}

//Exercício 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let higherNumber = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }
}

console.log(higherNumber);

//Exercício 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let oddNumber = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        oddNumber += 1;
    }
}

if (oddNumber === 0) {
    console.log("Nenhum número ímpar encontrado")
} else {
    console.log(oddNumber);
}

//Exercício 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let smallerNumber = 1000;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < smallerNumber) {
        smallerNumber = numbers[index];
    }
}

console.log(smallerNumber);

//Exercício 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let nums = [];
for (let num = 0; num <= 25; num += 1) {
    nums.push(num);
}

console.log(nums);

//Exercício 9 -Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let result = [];
for (let i = 0; i < nums.length; i += 1) {
    result.push(nums[i] / 2);
}
console.log(result);