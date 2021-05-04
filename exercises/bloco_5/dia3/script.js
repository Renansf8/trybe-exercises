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

// Escreva seu código abaixo.
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

function createHolidayButton(string) {
  const createButton = document.createElement('button');
  createButton.innerHTML = string;
  createButton.id = 'btn-holiday';

  const buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(createButton);
};

createHolidayButton('Feriados');

const holidayButton = document.getElementById('btn-holiday');
holidayButton.addEventListener('click', changeHolidayColor);

function changeHolidayColor() {
  const days = document.querySelectorAll('.holiday');
  days[0].style.backgroundColor = 'orange';
  days[1].style.backgroundColor = 'orange';
  days[2].style.backgroundColor = 'orange';
}

function createFridayButton(string) {
  const createButtonFriday = document.createElement('button');
  createButtonFriday.id = 'btn-friday';
  createButtonFriday.innerHTML = string;
  const buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(createButtonFriday)
};

createFridayButton('Sexta-feira');

const fridayButton = document.getElementById('btn-friday');
fridayButton.addEventListener('click', changeFridayText);

function changeFridayText() {
  const fridayDays = document.getElementsByClassName('friday');
  fridayDays[0].innerText = 'Sexta-feira';
  fridayDays[1].innerText = 'Sexta-feira';
  fridayDays[2].innerText = 'Sexta-feira';
  fridayDays[3].innerText = 'Sexta-feira';
}

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