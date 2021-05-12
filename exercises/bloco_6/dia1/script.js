let states = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];

let stateList  = document.getElementById('option-state');

function setStates() {
  for (let index = 0; index < states.length; index += 1) {
    let makeOptions = document.createElement('option');
    let state = states[index];
    makeOptions.innerHTML = state;
    stateList.appendChild(makeOptions);
  }
};

setStates();

let picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'DD/MM/YYYY',
  toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});