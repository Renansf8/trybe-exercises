//Parte 2

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Exercício 1 - Crie uma função para adicionar o turno manhã na lesson2
const addTurn = (object, key, value) => {
  object[key] = value;
};

addTurn(lesson2, 'turno', 'manhã');
console.log(lesson2);

//Exercício 2 - Crie uma função para listar as keys de um objeto.
const listKeys = (object) => {
  return console.log(Object.keys(object));
};

listKeys(lesson1);

//Exercício 3 - Crie uma função para mostar o tamanho de um objeto
const lengthObject = (object) => {
  return console.log(Object.keys(object).length);
};

lengthObject(lesson1);

//Exercício 4 - Crie uma função para listar os valores de um objeto.
const listValues = (object) => {
  console.log(Object.values(object));
};

listValues(lesson3);

//Exercício 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

//Exercício 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes
const sumStudents = () => {
  const totalStudents = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
  return totalStudents;
};

console.log(sumStudents());

//Exercício 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (object, position) => {
  return Object.values(object)[position];
}

console.log(getValueByNumber(lesson1, 2));

//Exercício 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verifyPair = (object, key, value) => {
  const entries = Object.entries(object);
  for (let entry in entries) {
    if (entries[entry][0] === key && entries[entry][1] === value) {
      return true;
    } else {
      return false
    }
  }
};

console.log(verifyPair(lesson1, 'materia', 'Matemática'))