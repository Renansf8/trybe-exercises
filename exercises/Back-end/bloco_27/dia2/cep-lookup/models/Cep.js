// models/Cep.js

// Importamos a conexão com o banco
const connection = require('./connection');

// Regex que identifica um CEP já formatado
const CEP_REGEX = /\d{5}-\d{3}/;

const getAllCeps = async () => {
  const [ceps] = await connection.execute('SELECT * FROM ceps');

  return ceps;
};

// Função que formata um CEP
const formatCep = (cep) => {
  // Caso o CEP já esteja formatado, retorna o próprio CEP
  if (CEP_REGEX.test(cep)) return cep;

  // Caso não esteja formatado, utiliza regex para adicionar a formatação
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

// Formata os campos para exibição
const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf});

const findAddressByCep = async (cepToSearch) => {
  // Removemos todos os traços, pois armazenamos o CEP
  // puro no banco
  const treatedCep = cepToSearch.replace('-', '');

  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';

  // Executamos a query, selecionando o primeiro resultado, caso exista
  // e assumindo `null`, caso contrário
  const result = await connection.execute(query, [treatedCep])
    .then(([results]) => (results.length ? results[0] : null));

  // Caso nenhum resultado seja encontrado, retornamos `null`
  if (!result) return null;

  // Retornamos os dados do CEP formatados pela função getNewCep
  return getNewCep(result);
};

const createAddress = async ({ cep: rawCep, logradouro, bairro, localidade, uf}) => {
  const cep = rawCep.replace(/-/, '');

  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';

  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  return { cep, logradouro, bairro, localidade, uf };
};

const updateAddress = async (cep, logradouro, bairro, localidade, uf) => {
  await connection.execute('INSERT INTO cep_lookup.ceps SET cep=? logradouro=? bairro=?localidade=? uf=? WHERE cep=?', [cep, logradouro, bairro, localidade, uf, cep]);

  return { cep, logradouro, bairro, localidade, uf };
};

module.exports = {
  findAddressByCep,
  getAllCeps,
  createAddress,
  updateAddress
};