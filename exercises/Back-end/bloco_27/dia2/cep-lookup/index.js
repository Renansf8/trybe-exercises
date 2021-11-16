require('dotenv').config();
const express = require('express');
const Cep = require('./controllers/Cep');

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: "pong!"});
});

app.get('/cep', Cep.getAllCeps);
app.get('/cep/:cep', Cep.findAddressByCep);
app.post('/cep', Cep.createAddress);
app.put('/cep/:cep', Cep.updateAddress);

const PORT = process.env.DB_PORT || 3000

app.listen(PORT, () => console.log('Server has startded'));