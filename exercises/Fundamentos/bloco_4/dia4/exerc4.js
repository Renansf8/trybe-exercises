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

//Exercício 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function maisRepetido(numeros) {
    //Armazenar quantas vezes repetiu o número mais repetido
    let contRepetido = 0;
    let contNumero = 0;
    //Armazenar o número mais repetido
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }

  console.log(maisRepetido([2, 3, 2, 5, 8, 2]));

  //Exercício 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N
  function sum(n) {
      let nums = [];
      for (let i = 0; i <= n; i += 1) {
        nums.push(i);
      }
      let total = 0;
      for (let num in nums) {
          total = total + nums[num];
      }
      return total;
  }

  console.log(sum(5));

  //Exercício 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
  function verifyWord(startString, endString) {
    startString = startString.split('');
    endString = endString.split('');
    control = true;
    for (let i = 0; i < endString.length; i += 1) {
        if (startString[startString.length - endString.length + i] != endString[i]) {
            control = false;
        }
    }
    return control;
  }

  console.log(verifyWord('renan', 'on'));