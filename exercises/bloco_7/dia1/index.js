//Parte 1

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

  testingScope(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortedOddsAndEvens = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;

    return oddsAndEvens;
  };

  console.log(`Os números ${sortedOddsAndEvens()} se encontram ordenados de forma crescente`);

  //Parte 2
  //Exercício 1
const fatorial = (number) => {
  let total = 1;
  for (let index = number; index != 0; index -= 1) {
    total *= index;
  }
  return total;
};

console.log(fatorial(6));

//Exercício 2
const longestWord = phrase => {
  const splitedPhrase = phrase.split(' ');
  let longest = '';
  for (let index = 0; index < splitedPhrase.length; index += 1) {
    if (splitedPhrase[index].length > longest.length) {
      longest = splitedPhrase[index];
    } else if (splitedPhrase[index].length == longest.length) {
      longest = 'Temos mais de uma palavara do mesmo tamanho :/'
    }
  }

  return longest;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

//Exercício 4

  const changeString = (string) => {
    const determinedString = 'Tryber x aqui!';
    const splitedDeterminedString = determinedString.split(' ');
    for (let index = 0; index < splitedDeterminedString.length; index += 1) {
      if (splitedDeterminedString[index] === 'x') {
        splitedDeterminedString[index] = string;
      }
    }
    return splitedDeterminedString.join(' ');
  };

  console.log(changeString('renan'));
