const connection = require('./connection');
const { ObjectId } = require('mongodb');

const toCamel = (bookData) => {
  return {
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id
  }
};

const getAllBooks = async () => {
  return connection().then((db) => db.collection('books').find().toArray())
    .then((books) => {
      return books.map(({ _id, title, author_id}) => {
        return toCamel({
          id: _id,
          title,
          author_id,
        })
      })
    })
}

// Lista todos os livros com SQL
// const getAllBooks = async () => {
//   const [books] = await connection.execute('SELECT * FROM books');

//   return books.map(toCamel);
// }

// Retornar o livro pelo id do autor com SQL
// const getByAuthorId = async (id) => {
//   const query = 'SELECT * FROM books WHERE id=?';
//   const [books] = await connection.execute(query, [id]);

//   if (!books) return null;

//   return books.map(toCamel)[0];
// };

const getByAuthorId = async (id) => {
  const bookData = await connection()
    .then((db) => db.collection('books').findOne(ObjectId(id)))

  if (!bookData) return null;

  const { title, author_id } = bookData;

  return toCamel({
    title,
    author_id
  })
};

// Cria um livro com SQL
// const createBook = async (title, authorId) => {
//   const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)'
//   connection.execute(query, [title, authorId]);
// };

const createBook = async (title, author_id) => {
  connection()
    .then((db) => db.collection('books').insertOne({
      title,
      author_id
    }))
};

module.exports = {
  getAllBooks,
  getByAuthorId,
  createBook,
}