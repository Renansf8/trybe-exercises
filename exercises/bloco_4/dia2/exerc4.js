let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 1
// for (let num of numbers) {
//     console.log(num);
// }

//Exercício 2
// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     soma = soma + numbers[index];
// }
// console.log(soma);

//Exercício 3
// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     soma = soma + numbers[index];
// }
// let media = soma / numbers.length
// console.log(media);

//Exercício 4
// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     soma = soma + numbers[index];
// }
// let media = soma / numbers.length
// console.log(media)
// if (media > 20) {
//     console.log('Valor maior que 20')
// } else {
//     console.log('valor menor que 20');
// }

//Exercício 5
// let higherNumber = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > higherNumber) {
//         higherNumber = numbers[index];
//     }
// }

// console.log(higherNumber);

//Exercício 6
// let oddNumber = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         oddNumber += 1;
//     }
// }

// if (oddNumber === 0) {
//     console.log("Nenhum número ímpar encontrado")
// } else {
//     console.log(oddNumber);
// }

//Exercício 7
// let smallerNumber = 1000;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] < smallerNumber) {
//         smallerNumber = numbers[index];
//     }
// }

// console.log(smallerNumber);

//Exercício 8
let nums = [];
for (let num = 0; num <= 25; num += 1) {
    nums.push(num);
}

// console.log(nums);

//Exercício 9
let result = [];
for (let i = 0; i < nums.length; i += 1) {
    result.push(nums[i] / 2);
}
console.log(result);