// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

//Bavy steps:
// 1 - Adicionar o array
let fruits = [3, 4, 10, 1, 12];
// 2 - Criar uma variável com o valor 0
let result = 0;
// 3 - Criar um loop que percorre o array
for (let i = 0; i < fruits.length; i += 1) {
    // 4 - Incrementar a variável com o valor correspondente a cada loop
    result += fruits[i];
}

// 5 - Criar um if com a condição da variável ser maior que 15
if (result > 15) {
    // 6 - Imprimir a variável
    console.log(result)
} else {
    // 7 - Imprimir a mensagem "valor menor que 16"
    console.log("valor menor que 16");
}