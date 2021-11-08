const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  
  const fullName = [firstName, middleName, lastName]
      .filter((name) => name)
      .join(' ');
  
  return {
      id,
      firstName,
      middleName,
      lastName,
      name: fullName,
  };
  };

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
}

// Lista de autores com o SQL
// const getAll = async () => {
//   const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');

//   return authors.map(serialize).map(getNewAuthor);
// }

const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
      .then((authors) => {
        return authors.map(({ _id, firstName, middleName, lastName }) => {
          return getNewAuthor({
            id: _id,
            firstName,
            middleName,
            lastName,
          });
        });
    });
};

// Buscando por id com SQL
// const findById = async (id) => {
//   const [authorData] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?', [id]);

//   if(authorData.length === 0) return null;

//   const { firstName, middleName, lastName } = authorData.map(serialize)[0];

//   return getNewAuthor({
//     id, firstName, middleName, lastName
//   })
// };

const findById = async (id) => {

  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({ id, firstName , middleName, lastName })
}

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
};

// Cria um novo autor com SQL
// const createAuthor = async (firstName, middleName, lastName) => {
//   connection.execute('INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)', [firstName, middleName, lastName]);
// };

const createAuthor = async (firstName, middleName, lastName) => {
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName}))
}

module.exports = {
  getAll,
  findById,
  createAuthor,
  isValid
}