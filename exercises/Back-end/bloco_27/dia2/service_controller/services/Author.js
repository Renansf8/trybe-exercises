const Author = require('../models/Author');

const getAll = async () => Author.getAll();

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) {
    return {
      error: {
        code : 'notFound',
        message: `Não foi possível encontrar um autor com o id ${id}`,
      },
    };
  }

  return author;
};

// Validações
// const validate = (firstName) => {
//   if (!firstName) return { code: 422, message: "Nome é obrigatório" };
//   if (typeof firstName !== "string") return { code: 422, message: "Nome deve ser uma string"};

//   return {};
// };

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
};


const create =  async (firstName, middleName, lastName) => {
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  // const validations = validate(firstName);

  // if (validations.message) return validations; 

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Um ator já existe com esse nome completo',
      },
    };
  }
  return Author.createAuthor(firstName, middleName, lastName);
};

module.exports = {
  getAll,
  findById,
  create
}