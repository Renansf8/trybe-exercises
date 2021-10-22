/**
 * 1 -  Crie uma função que recebe três parâmetros retorna uma Promise .
Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.}
*/

function count(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject(new Error('Informe apenas números'))

    const result = (a + b) * c;

    if (result < 50) reject(new Error("Valor muito baixo"))

    resolve(result)
  })

  return promise;
}

// count(10, 30, 4).then((response) => console.log(`Resultado: ${response}`))
//   .catch(err => console.log(err.message))




// const randomNum = Math.floor(Math.random() * 100 + 1);

// count(randomNum, randomNum, randomNum).then(response => console.log(`resultado: ${response}`))
// .catch(err => console.log(err.message));

/** 3 -  Reescreva o código do exercício anterior para que utilize async/await .*/

async function callCount() {
  try{
    const result = await count(10, 5, 2)
    console.log(result)
  }catch(err) {
    console.log(err.message)
  }
}

callCount()