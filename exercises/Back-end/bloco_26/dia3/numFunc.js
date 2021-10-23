function numFunc(num) {
  if (typeof num !== 'number') return 'o parâmetro deve ser um número'

  if (num > 0) return 'positivo';
  if (num < 0) return 'negativo';
  if (num === 0) return 'neutro';
}

module.exports = numFunc;