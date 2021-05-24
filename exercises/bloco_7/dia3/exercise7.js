const assert = require('assert');
// escreva a função wordLengths aqui
const words = ['sun', 'potato', 'roundabout', 'pizza'];

const wordLengths = (array) => {
  const convertedArray = [];
  for (let index = 0; index < array.length; index += 1) {
    const nums = array[index].length;
    convertedArray.push(nums);
  }
  return convertedArray;
};

const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);