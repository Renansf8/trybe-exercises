//Exercício 1 - Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n 

// let n = 2;
// let inputLine = "";
// let symbol = "*";

// for (let i = 0; i < n; i += 1) {
//     inputLine = inputLine + symbol;
// }

// for (let i = 0; i < n; i += 1) {
//     console.log(inputLine)
// }

//Exercício 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

// let n = 5;
// let inputLine = "";
// let symbol = "*";

// for (let i = 0; i < n; i += 1) {
//     inputLine = inputLine + symbol;
//     console.log(inputLine)
// }

//Exercício 3 - Inverta o lado do triângulo

// let n = 5;
// let inputLine = "";
// let symbol = "*";
// let inputPosition = n;

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//     for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//         if (columnIndex < inputPosition) {
//             inputLine = inputLine + " ";
//         } else {
//             inputLine = inputLine + symbol
//         }
//     };
//     console.log(inputLine);
//     inputLine = "";
//     inputPosition -= 1;
// };

//Exercício 4 - Depois faça uma pirâmide com n asteriscos de base
/**   *
 *   ***
 *  *****
 */

let n = 5;
let inputLine = "";
let symbol = "*";
let middlePosition = (n + 1) / 2;
let controlLeft = middlePosition;
let controlRight = middlePosition;

for (let lineIndex = 0; lineIndex <= middlePosition; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
        if (columnIndex > controlLeft && columnIndex < controlRight) {
            inputLine = inputLine + symbol;
        } else {
            inputLine = inputLine + " ";
        }
    };
    console.log(inputLine);
    inputLine = "";
    controlRight += 1;
    controlLeft -= 1;
};

