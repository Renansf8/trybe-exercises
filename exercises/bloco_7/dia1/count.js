//Exercício 3

let countButton = document.getElementById("count-button");
let counter = document.getElementById('counter');
let clickCount = 1;

countButton.addEventListener('click', () => {
    counter.innerHTML = clickCount;
    clickCount += 1;
});

