const express = require('express');
const app = express();
const port = 3000;
const Author = require('./controllers/Author');
const Books = require('./controllers/Books');

const errorMiddleware = require('./middlewares/error');

app.use(express.json());

app.get('/authors', Author.getAll)
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);


app.get('/books', Books.getAll);
app.get('/books/:id', Books.findById);
app.post('/books', Books.create);

app.use(errorMiddleware);

app.listen(port, () => console.log('Server started'));

