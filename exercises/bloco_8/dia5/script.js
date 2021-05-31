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