import './App.css';

function handleButton() {
  console.log('Algum texto aleatório');
}

function handleButton2() {
  console.log('Mais um texto aleatório');
}

function handleButton3() {
  console.log('Outro texto aleatório');
}

function App() {
  return (
    <div>
      <button onClick={handleButton}>Clica aqui</button>
      <button onClick={handleButton2}>Clica aqui</button>
      <button onClick={handleButton3}>Clica aqui</button>
    </div>
  );
}

export default App;
