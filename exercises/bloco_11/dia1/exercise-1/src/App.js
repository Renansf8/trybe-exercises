import './App.css';

const appointments = [
  'Estudar o assunto 1', 
  'Estudar o assunto 2', 
  'Ir para a cirúrgia', 
  'Repousar', 
  'Voltar as atividade normais'
];

const Task = (appointments) => {
  return (
    appointments.map((appointment) => <li>{appointment}</li>
    )
  );
}

function App() {
  return (
    Task(appointments)
  );
}

export default App;
