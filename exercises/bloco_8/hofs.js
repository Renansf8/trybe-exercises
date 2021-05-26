//map()
const arr1 = [1, 3, 6];

const arr2 = arr1.map((item) => item * 2);

console.log(arr2);

//map() sem a HoF's
const birthYear = [1995, 1992, 1988, 1966];
const ages = [];
for(let i = 0; i < birthYear.length; i++) {
  let age = `${2021 - birthYear[i]} anos`;
  ages.push(age);
}

console.log(ages);

//map() com a HoF's
const birthYear = [1995, 1992, 1988, 1966];

const ages = birthYear.map((year) => `${2021 - year} anos`);

console.log(ages);

/**----------------------------------------------------------------- */
//filter() sem HoF's
const persons = [
  { name: 'Peter', age: 16 },
  { name: 'Mark', age: 18 },
  { name: 'John', age: 27 },
  { name: 'Jane', age: 14 },
  { name: 'Tony', age: 24},
];

const fullAge = [];

for (let index = 0; index < persons.length; index += 1) {
  if (persons[index].age >= 18 ) {
    fullAge.push(persons[index])
  }
}

console.log(fullAge);

//filter() com HoF's
const persons = [
  { name: 'Peter', age: 16 },
  { name: 'Mark', age: 18 },
  { name: 'John', age: 27 },
  { name: 'Jane', age: 14 },
  { name: 'Tony', age: 24},
];
const fullAge = persons.filter(person => person.age >= 18);
console.log(fullAge);
