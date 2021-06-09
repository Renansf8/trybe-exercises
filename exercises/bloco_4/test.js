const sum = (a, b) => {
  // if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Coloca um número ai mano');
  if (typeof a !== 'number' || typeof b !== 'number') console.log('Coloca um número ai mano');
  return a + b;
};

console.log(sum(1, '5'));