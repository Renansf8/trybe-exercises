// const express = require('express');

// const app = express();

// app.get('/hello', handleHelloWorldReuqest);

// app.listen(3001, () => console.log('Aplicação ouvindo a porta 3001'));

// function handleHelloWorldReuqest(_req, res) {
//     res.status(200).send('Hello World');
// }

/* index.js */

// implementando o endpoint que retorna a lista de receitas na rota /recipes quando a requisição for do tipo GET 
const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
app.use(express.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
    { id: 1, name: 'Refrigerante Lata', price: 5.0 },
    { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
    { id: 3, name: 'Suco 300ml', price: 4.0 },
    { id: 4, name: 'Suco 1l', price: 10.0 },
    { id: 5, name: 'Cerveja Lata', price: 4.5 },
    { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  return res.status(200).json({message: 'Valid Token!'})
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice) && r.price >= minPrice);
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id))
  
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  return res.json(recipe);
});

app.get('/recipes', (_req, res) => {
  return res.status(200).json(recipes)
})


app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  return res.status(201).json({ message: 'Recipe created successfully!'});
});


app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});


app.get('/drinks', function (_req, res) {
  res.json(drinks.sort((itemA, itemB) => (itemA.name > itemB.name) ? 1 : (itemA.name < itemB.name) ? -1 : 0));
});

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((drink) => drink.name.includes(name));
  return res.status(200).json(filteredDrinks);
});

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });

  return res.status(200).json({ message: 'Drink created successfully!'})
})



app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});