// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 11);

//   if (number <= 5) {
//     return reject(console.log(`Que fracasso =/ Nosso número foi ${number}`));
//   }
//   resolve(console.log(`Que sucesso =D nosso número foi ${number}`));
// })


//Usando then e catch
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =D nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =/ nosso número foi ${number}`));
