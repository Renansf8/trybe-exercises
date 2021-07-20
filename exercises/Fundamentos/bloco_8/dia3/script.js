//Array.filter

const arrayMyStudents = ['Renan', 'Ruan', 'Ramon', 'Valdo', 'Flávio'];

const removeStudentByName = (name, listStudents) => listStudents.filter((student) => student !== name);

const newListStudent = removeStudentByName('Valdo', arrayMyStudents);

console.log(newListStudent);