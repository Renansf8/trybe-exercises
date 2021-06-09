const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((response) => response.json())
      .then((response) => (response.value));
  } 
  throw new Error('endpoint não existe');
};

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");

const sumRandonNumbers = () => {
  const array = [];
  for (index = 0; index < 10; index += 1) {
    const randomNumber = Math.floor(Math.random() * 51)
    array.push(randomNumber * randomNumber);
  }
  const sumArray = array.reduce((acc, curr) => {
    return acc += curr
  }, 0)
  if (sumArray >= 8000) throw new Error();
  return sumArray
}

const sumArrayFromSum = (sum) => [2, 3, 5, 10].map((num) => Math.round(sum / num))
  .reduce((acc, curr) =>  acc += curr, 0);

const fetchPromise = async () => {
  try {
    const sum = await sumRandonNumbers();
    const sumFromSum = await sumArrayFromSum(sum);
    return console.log(sumFromSum)
  } catch(error) {
    console.log('É mais de 8000. Essa promise deve estar quebrada!')
  }
};

fetchPromise();