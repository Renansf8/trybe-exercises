//Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (infoUser) => {
  const employees = {
    id1: infoUser('Pedro Guerra'),
    id2: infoUser('Luiza Drumond'),
    id3: infoUser('Carla Paiva'),
  }
  return employees;
};

const callback = (nomeCompleto) => {
  return ({
    nome: nomeCompleto,
    email: `${nomeCompleto.replace(' ', '_').toLowerCase()}@trybe.com`
  });
};

console.log(newEmployees(callback));