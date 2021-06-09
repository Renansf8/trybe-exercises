const promise = new Promise((resolve, reject) => {
  const array = [];
  for (index = 0; index < 10; index += 1) {
    const randomNumber = Math.floor(Math.random() * 51)
    array.push(randomNumber * randomNumber);
  }
  const sumArray = array.reduce((acc, curr) => {
    return acc += curr
  }, 0)
  if (sumArray >= 8000) reject(sumArray);
  resolve(sumArray)
})
.then((sum) => 
  [2, 3, 5, 10].map((num) => Math.round(sum / num))
  // const divisivleArray = [2, 3, 5, 10];
  // const result = divisivleArray.map((num) => Math.round(sum / num));
  // console.log(result);
)
.then((nums) => console.log(nums.reduce((acc, curr) => acc += curr, 0)))
.catch((sum) => console.log(`É mais de 8000, essa promise deve estar quebrada(${sum})`))
