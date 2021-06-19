import './App.css';

const appointments = [
  'Estudar o assunto 1', 
  'Estudar o assunto 2', 
  'Ir para a cirúrgia', 
  'Repousar', 
  'Voltar as atividade normais'
];

const Task = (appointment) => {
  return (
    <li>{appointment}</li>
  );
}

function App() {
  return (
    <ul>{appointments.map((appointment) => Task(appointment))}</ul>
  );
}

export default App;
