const express = require("express");
const bodyParser = require("body-parser");

const booksController = require('./controllers/booksControllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/books', booksController.getAll)

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))