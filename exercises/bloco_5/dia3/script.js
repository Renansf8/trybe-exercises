function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
  
createDaysOfTheWeek();

// Exercicio 1 - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
function createDays() {
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const daysOfWeek = document.querySelector('#days');
for (let index = 0; index < dezDaysList.length; index += 1) {
  const days = dezDaysList[index];
  const dayItem = document.createElement('li');
  if (days === 24 || days === 31) {
    dayItem.className = 'day holiday';
  } else if (days === 4 || days === 11 || days === 18) {
    dayItem.className = 'day friday'
  } else if (days === 25) {
    dayItem.className = 'day holiday friday';
  } else {
    dayItem.className = 'day'
  }
  dayItem.innerHTML = days;
  daysOfWeek.appendChild(dayItem);
}
};

createDays();

//Exercício 2 - Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
function createHolidayButton(string) {
  const createButton = document.createElement('button');
  createButton.innerHTML = string;
  createButton.id = 'btn-holiday';

  const buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(createButton);
};

createHolidayButton('Feriados');

// Exerccício 3 - Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
const holidayButton = document.getElementById('btn-holiday');
holidayButton.addEventListener('click', changeHolidayColor);

function changeHolidayColor() {
  const days = document.querySelectorAll('.holiday');
  days[0].style.backgroundColor = 'orange';
  days[1].style.backgroundColor = 'orange';
  days[2].style.backgroundColor = 'orange';
}

// Exercício 4 - Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
function createFridayButton(string) {
  const createButtonFriday = document.createElement('button');
  createButtonFriday.id = 'btn-friday';
  createButtonFriday.innerHTML = string;
  const buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(createButtonFriday)
};

createFridayButton('Sexta-feira');

// Exercício 5 - Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
const fridayButton = document.getElementById('btn-friday');
fridayButton.addEventListener('click', changeFridayText);

function changeFridayText() {
  const fridayDays = document.getElementsByClassName('friday');
  fridayDays[0].innerText = 'Sexta-feira';
  fridayDays[1].innerText = 'Sexta-feira';
  fridayDays[2].innerText = 'Sexta-feira';
  fridayDays[3].innerText = 'Sexta-feira';
}

//Exercício 6 - Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(e) {
    e.target.style.fontSize = '30px';
    e.target.style.fontWeight = '600';
  });
};

dayMouseOver();

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(e){
    e.target.style.fontSize = '20px';
    e.target.style.fontWeight = '200';
  });
};

dayMouseOut();

//Exercício 7 - Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
function createTask(string) {
  let createSpan = document.createElement('span');
  createSpan.innerText = string;

  let myTasks = document.querySelector('.my-tasks');
  myTasks.appendChild(createSpan);
}

createTask('Estudar Javascript');

//Exercício 8 - Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
function createLegend(cor) {
  const createDiv = document.createElement('div');
  createDiv.style.backgroundColor = cor;

  const myTasks = document.querySelector('.my-tasks');
  myTasks.appendChild(createDiv);
}

createLegend('red');

//Exercício 9 - Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
const colorContainer = document.querySelector('.my-tasks div');
colorContainer.addEventListener('click', taskSelected);

function taskSelected() {
  const spanContainer = document.querySelector('.my-tasks span');
  spanContainer.className = 'task selected';
}

//Exercício 10 - Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
const day = document.querySelector('#days');
day.addEventListener('click', function(e) {
  const colorContainer = document.querySelector('.my-tasks div');
  e.target.style.color = colorContainer.style.backgroundColor;
});
