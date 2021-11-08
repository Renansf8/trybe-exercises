const express = require('express');
const app = express();
const port = 3000;
const Author = require('./models/Author');
const Books = require('./models/Book');

app.use(express.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  return res.status(200).json(authors);
})

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: "Author Not Found"});

  res.status(200).json(author);
});

app.get('/books', async (_req, res) => {
  const books = await Books.getAllBooks();

  return res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Books.getByAuthorId(id);

  if (!book) return res.status(404).json({ message: "Book Not Found"})

  return res.status(200).json(book);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: 'Invalid data!'}) 

  await Author.createAuthor(first_name, middle_name, last_name);

  return res.status(200).json({ message: "Author created!"})
})

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!Books.isValid(title, author_id)) return res.status(400).json({ message: 'Invalid data!'});

  await Books.createBook(title, author_id);

  return res.status(201).json({ message: 'Book created!'})
})

app.listen(port, () => console.log('Server started'));

