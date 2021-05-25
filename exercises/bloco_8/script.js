const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  } else {
    console.log(number, 'is odd');
  }
});

const wakeUp = () => `Acordando!!`;

const takeCoffee = () => `Bora tomar café`;

const goToBed = () => `Partiu Dormir!!`;

const doinThings = (action) => console.log(action());

doinThings(goToBed);