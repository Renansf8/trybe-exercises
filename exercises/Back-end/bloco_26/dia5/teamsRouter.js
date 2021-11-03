const express = require('express');
const router = express.Router();

const {isValid} = require('./middlewares/valid');

const teams = [];

router.post('/', isValid, (req, res) => {
  const { name, initials, country, league } = req.body;

  teams.push({ name, initials, country, league});

  return res.status(200).json({ message: `Nome: ${name}, Iniciais: ${initials}, País: ${country}`});
})

router.get('/', (req, res) => {
  //  if (!teams) return res.status(200).json({ "teams": [] })

  return res.status(200).send({teams});
})

module.exports = router;