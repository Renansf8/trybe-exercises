//Programa 1
let a = 5;
let b = 10;
let operador = "%";

switch(operador) {
  case "+": 
    console.log(a + b)
    break;

  case "-":
    console.log(a - b)
    break;

  case "*":
    console.log(a * b)
    break;

  case "*":
    console.log(a / b)
    break;

  case "%":
    console.log(a % b)
    break;

}

//Programa 2
let c = 10;
let d = 20;

if(c > d) {
  console.log(c);
} else {
  console.log(d);
}

//Programa 3
let e = 5;
let f = 12;
let g = 28;

if(e > f && e > g) {
  console.log(e);
} else if (f > e && f > g) {
  console.log(f);
} else {
  console.log(g);
}

//Programa 4
let number = -2;

if(number == 0) {
  console.log("zero");
} else if(number > 0) {
  console.log("positive");
} else {
  console.log("negative");
}

//Programa 5
let angle1 = 40;
let angle2 = 80;
let angle3 = -60;

if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
  console.log("Valor do ângulo inválido");
}
else if (angle1 + angle2 + angle3 === 180) {
  console.log(true);
} else {
  console.log(false)
}

//Programa 6
let piece = "RAINHA";
let pieceLower = piece.toLowerCase(); 

switch(pieceLower) {
  case "peao": 
      console.log("Para frente")
      break;

    case "torre":
      console.log("Horizontal e vertical")
      break;

    case "rainha":
      console.log("Para todos os lados")
      break;
}

//Programa 7
let note = 60;

if (note >= 90) {
  console.log("A");
} else if (note < 90 && note >= 80) {
  console.log("B");
} else if (note < 80 && note >= 70) {
  console.log("C")
} else if (note < 70 && note >= 60) {
  console.log("D")
} else if (note < 60 && note >= 50) {
  console.log("E");
} else (
  console.log("F")
)

//PROGRAMA 8
let num1 = 3;
let num2 = 5;
let num3 = 11;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

//PROGRAMA 9
let num1 = 8;
let num2 = 10;
let num3 = 18;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}

//PROGRAMA 10
let custo = 80;
let valorVenda = 130;
let custoTotal = custo + ((20/100) * custo);
let lucro = valorVenda - custoTotal;

if (custo < 0 || valorVenda < 0) {
  console.log("Valor inválido")
} else {
  console.log(lucro * 1000);
}

//PROGRAMA 11
let salarioBruto = 5000;
let INSS;
let IR;

if (salarioBruto <= 1556.94) {
  INSS = ((8/100) * salarioBruto);
} else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92) {
  INSS = ((9/100) * salarioBruto);
} else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
  INSS = ((11/100) * salarioBruto);
} else {
  INSS = 570.88;
}

let salarioBase = salarioBruto - INSS;

if (salarioBase > 1903.99 && salarioBase <= 2826.65) {
  IR = ((7.5/100 * salarioBase) - 142.80);
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  IR = ((15/100 * salarioBase) - 354,80);
} else if (salarioBase > 3751.06 && salarioBase <= 4664.68) {
  IR = ((22.5/100 * salarioBase) - 636.13);
} else {
  IR = ((27.5/100 * salarioBase) - 869.36);
}

let salarioLiquido = salarioBruto - (INSS + IR);

console.log(salarioLiquido);
