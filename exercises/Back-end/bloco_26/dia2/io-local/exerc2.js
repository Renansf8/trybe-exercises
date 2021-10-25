// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .

const fs = require('fs').promises;

const file = './simpsdons.json';

  // fs.readFile(file).then((content) => {
  //   return JSON.parse(content)
  // }).then((simp) => {
  //   return simp.map(({id, name}) => `${id} - ${name}`)
  // }).then((strings) => {
  //   strings.forEach((string) => console.log(string))
  // })


  const read = async () => {
    try {
      const readFiles = await fs.readFile(file);
      const response = await JSON.parse(readFiles);
      const result = response.map(({id, name}) => {
        return `${id} - ${name}`
      })
      const stringResult = result.forEach((string) => console.log(string))
      return stringResult
    } catch(err) {
      throw new Error('deu ruim!')
    }
  }

  read()