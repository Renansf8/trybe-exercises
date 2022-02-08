const Book = require('../models/Book');

const getAll = async () => Book.getAllBooks();

const findById = async (id) => {
  const book = await Book.getByAuthorId(id);

  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um autor com o did ${id}`,
      },
    };
  }

  return book;
};

const create = async (title, author_id) => {
  return Book.createBook(title, author_id)
};

const isValid = (title, authorId) => {
  if (title === '' || title.length < 3) return false;
  if (authorId === '' || !authorId) return false;

  return true;
};

module.exports = {
  getAll,
  findById,
  create,
  isValid
}