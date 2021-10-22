const fs = require('fs').promises;

const file = './simpsons.json';

async function getSimpsonById(id) {
  const simpsons = await fs
    .readFile(file, 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

    const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

    if (!chosenSimpson) {
      throw new Error('id não encontrado');
    }

    return console.log(chosenSimpson)
}

getSimpsonById(1)