const rescue = require('express-rescue');
const service = require('../services/Cep');
const Joi = require('joi');

const getAllCeps = rescue(async (req, res) => {
  const ceps = await service.getAllCeps();

  res.status(200).json(ceps);
});

const findAddressByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  const address = await service.findAddressByCep(cep);

  if (address.error) {
    return next(address.error);
  }

  return res.status(200).json(address);
});

const createAddress = rescue(async (req, res, next) => {
  const requiredNonEmptyString = Joi.string().not().empty().required();

  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate(req.body);

  if (error) return next(error);

  const newCep = await service.createAddress(req.body);

  if (newCep.error) {
    return next(newCep.error);
  }

  res.status(201).json(newCep);
});

const updateAddress = rescue(async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const newAddress = await service.updateAddress(cep, logradouro, bairro, localidade, uf);

  res.status(201).json(newAddress);
});

module.exports = {
  getAllCeps,
  findAddressByCep,
  createAddress,
  updateAddress
}