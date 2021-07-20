// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
  // Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const points = (answers, studentAnswers, checkAnswers) => {
  return `${checkAnswers(answers, studentAnswers)} é a nota final`
};

const checkAnswers = (correctAnswers, studentAnswers) => {
  let totalPoints = 0;
  for (let index1 = 0; index1 < correctAnswers.length; index1 += 1) {
    if (studentAnswers[index1] === 'N.A') {
      totalPoints = totalPoints;
    } else if (correctAnswers[index1] !== studentAnswers[index1]) {
      totalPoints = totalPoints - 0.5;
    } else if (correctAnswers[index1] === studentAnswers[index1]) {
      totalPoints = totalPoints + 1;
    }
  }
  return totalPoints;
};

console.log(points(rightAnswers, studentAnswers, checkAnswers));