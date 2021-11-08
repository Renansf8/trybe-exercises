const connection = require('./connection');

const toCamel = (bookData) => {
  return {
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id
  }
};

const getAllBooks = async () => {
  const [books] = await connection.execute('SELECT * FROM books');

  return books.map(toCamel);
}

const getByAuthorId = async (id) => {
  const query = 'SELECT * FROM books WHERE id=?';
  const [books] = await connection.execute(query, [id]);

  if (!books) return null;

  return books.map(toCamel)[0];
};

const isValid = (title, authorId) => {
  if (title === '' || title.length < 3) return false;
  if (authorId === '' || !authorId) return false;

  return true;
};

const createBook = async (title, authorId) => {
  const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)'
  connection.execute(query, [title, authorId]);
};

module.exports = {
  getAllBooks,
  getByAuthorId,
  createBook,
  isValid
}