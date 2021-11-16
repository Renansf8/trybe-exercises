const Cep = require('../models/Cep');

const CEP_REGEX = /\d{5}-?\d{3}/;

const getAllCeps = async () => Cep.getAllCeps();

const findAddressByCep = async (searchedCep) => {
  // Valida o CEP e em caso dele ser falso, retorna uma erro
  if (!CEP_REGEX.test(searchedCep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }

  const cep = await Cep.findAddressByCep(searchedCep);

  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }

  return cep;
}

const createAddress = async ({ cep, logradouro, bairro, localidade, uf}) => {
  const existingCep = await Cep.findAddressByCep(cep);

  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }

  return Cep.createAddress({ cep, logradouro, bairro, localidade, uf});
};

const updateAddress = async ({ cep, logradouro, bairro, localidade, uf}) => {
  return Cep.updateAddress(cep, logradouro, bairro, localidade, uf)
};

module.exports = {
  findAddressByCep,
  getAllCeps,
  createAddress,
  updateAddress
};