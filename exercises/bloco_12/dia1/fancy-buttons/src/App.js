import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.handleButton = this.handleButton.bind(this);
    this.state = {
      numberOfClicks: 0,
    }
  }
  handleButton() {
    this.setState((estadoAnterior, _props) => ({
      numberOfClicks: estadoAnterior.numberOfClicks + 1
    }))
  }
  
  handleButton2() {
    console.log('Mais um texto aleatório');
  }
  
  handleButton3() {
    console.log('Outro texto aleatório');
  }
  render() {
    console.log(this)
    return (
      <div>
        <button onClick={this.handleButton}>{this.state.numberOfClicks}</button>
        <button onClick={this.handleButton2}>Clica aqui</button>
        <button onClick={this.handleButton3}>Clica aqui</button>
      </div>
    );
  }
  
}

export default App;
