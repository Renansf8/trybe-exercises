//Exercício 1

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

// const addTurn = (object, key, value) => {
//   object[key] = value;
// };

// console.log(lesson2);

// addTurn(lesson2, 'turno', 'manhã');

// console.log(lesson2);

//Exercício 2
// const listKeys = (object) => {
//   return console.log(Object.keys(object));
// };

// listKeys(lesson1);

//Exercício 3
// const lengthObject = (object) => {
//   return console.log(Object.keys(object).length);
  
// };

// lengthObject(lesson1);

//Exercício 4 
// const listValues = (object) => {
//   console.log(Object.values(object));
// };

// listValues(lesson3);

//Exercício 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

//Exercício 6 
const sumStudents = () => {
  const totalStudents = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
  return totalStudents;
};

console.log(sumStudents());

//Exercício 7
const getValueByNumber = (object, position) => {
  return Object.values(object)[position];
}

console.log(getValueByNumber(lesson1, 0));

//Exercício 8
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