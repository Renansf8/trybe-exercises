//Spread operator 
const cars = ['Gol', 'HB20', 'Focus'];
const motorcycles = ['Biz', 'R1'];
const vehicles = ['F40', ...cars, 'Uno', ...motorcycles];
// console.log(vehicles);

const trybeKnowledge = {
  softSkills: true,
  hardSkills: true,
  work: true,
}

const person = {
  name: 'Nádia',
  age: '28',
  city: 'BH',
};

const personTryber = {
  ...person,
  ...trybeKnowledge,
  sport: 'Corrida'
};

console.log(personTryber);


const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76


// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Kiwi', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({name, price, seller}) =>  {
  console.log(`Promoção ${name} por apenas ${price} é só aqui: ${seller}`);
};
printProductDetails(product);

//Exercício Fixação 1 -  Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [string, funcaoSaudacao] = saudacoes;

funcaoSaudacao(string);

//Exercício fixação 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

//Exercício fização 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares .

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
