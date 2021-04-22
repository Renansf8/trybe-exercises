// Exercício 1.1

const name = "Renan";
const birthCity = "Belém";
let birthYear = 1995;
birthYear = 1930;

console.log(name);
console.log(birthCity);
console.log(birthYear);

/**
 * Em constantes não é possível ratribuir o valor;
 */

 // Exercício 1.2

 let patientId = 50;
 let isEnrolled = true;
 const patientInfo = {
   firstName: 'Ana',
   lastName: 'Santos',
 };
 const patientEmail = 'ana@email.com';

 console.log(typeof patientId);
 console.log(typeof isEnrolled);
 console.log(typeof patientInfo);
 console.log(typeof patientEmail);

 // Exercício 1.3

let base = 5;
let altura = 8;
let area = base * altura;
console.log(area);

let perimetro = base + base + altura + altura;
console.log(perimetro);

// Exercício 1.4 

let nota = 70;
if (nota >= 80) {
    console.log("Parabéns, você foi aprovado");
} else if (nota <= 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
} else {
    console.log("Você foi reprovado")
}


// Exercício 1.5

let state = "reprovada";
switch (state) {
    case "aprovada":
        console.log("Parabéns, você foi aprovado");
        break;

    case "lista": 
        console.log("Você está na nossa lista de espera");
        break;

    case "reprovada": 
        console.log("Você foi reprovado");
        break;

    default:
        console.log("Não se aplica")
}