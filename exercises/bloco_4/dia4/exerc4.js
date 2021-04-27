//Exercício 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// function panlidromo(string) {
//     let arrayLetras = string.split('');
//     let isPanlidromo = true;
//     for (let index in arrayLetras) {
//         if (arrayLetras[index] != string[(string.length - 1) - index]) {
//             isPanlidromo = false;
//         }
//     }
//     return isPanlidromo;
// }

// console.log(panlidromo('arara'));

function panlidromo(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
        console.log(true)
    } else {
        console.log(false)
    }
}

panlidromo('arara')

//Exercício 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maxIndex(numeros) {
    let biggerIndex = 0;
    for (let index in numeros) {
        if (numeros[index] > numeros[biggerIndex]) {
            biggerIndex = index
        }
    }
    return biggerIndex;
}

console.log(maxIndex([2, 3, 6, 7, 10, 1]));

//Exercício 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function minIndex(numbers) {
    let smallerIndex = 0;
    for (let index in numbers) {
        if (numbers[index] < numbers[smallerIndex]) {
            smallerIndex = index
        }
    }
    return smallerIndex;
}
console.log(minIndex([2, 4, 6, -7, 10, 0, -3]))

//Exercício 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function biggerName(names) {
    let bigName = '';
    for (let index in names) {
        if (names[index].length > bigName.length) {
            bigName = names[index];
        }
    }
    return bigName;
}
console.log(biggerName(['José', 'Lucas', 'Nadia', 'Fernanda', 'Cairo', 'Joana']));