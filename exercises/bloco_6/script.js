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

