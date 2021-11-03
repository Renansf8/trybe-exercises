const express = require('express');
const teamsRouter = require('./teamsRouter');

const app = express();
app.use(express.json());

app.use('/teams', teamsRouter);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});