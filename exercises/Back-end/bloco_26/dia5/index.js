const express = require('express');
const authMiddleware = require('./auth-middleware');
const recipesRouter = require('./recipesRouter');

const app = express();

app.use(express.json());

app.use(authMiddleware)

app.use('/recipes', recipesRouter);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});