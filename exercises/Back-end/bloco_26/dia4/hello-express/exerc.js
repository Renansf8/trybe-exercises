const express = require('express');
const rescue = require('express-rescue');

const fs = require('fs');

const { getSimpsons, setSimpsons } = require('./fs-utils');

const app = express();
app.use(express.json());

// 1 - Crie uma rota GET /ping
//Sua rota deve retornar o seguinte JSON: { message: 'pong' }

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong'});
});

// 2 - Crie uma rota POST /hello
//Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
//Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${name}!`});
});

// 3 - Crie uma rota POST /greetings
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
 // Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age > 17) return res.status(200).json({ message: `Hello, ${name}!`})

  return res.status(401).json({ message: "Unaithorized"})
});

// 4 - Crie uma rota PUT /users/:name/:age .
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }.

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.body;

  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`})
})
// 6 - Crie um endpoint GET /simpsons
// O endpoint deve retornar um array com todos os simpsons

app.get('/simpsons', async (req, res) => {
  const simpsons = await getSimpsons();

  return res.status(200).json(simpsons)
})

// 7 - Crie um endpoint GET /simpsons/:id
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const simpsons = await getSimpsons();

  const filteredSimpsons = simpsons.find((simpsom) => simpsom.id === id);

  if (!filteredSimpsons) return res.status(404).json({ message: "simpson not found"})

  return res.status(200).json(filteredSimpsons)
})

// 8 - Crie um endpoint POST /simpsons .
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end();.

app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await getSimpsons();
  
  if (simpsons.filter((simp) => simp.id === id))  {
    return res.status(409).json({ message: 'id already exists'})
  }

  simpsons.push({id, name});

  await setSimpsons(simpsons);

  return res.status(204).end()
}))

app.listen(3000, () => console.log('App ouvindo na porta 3000'))