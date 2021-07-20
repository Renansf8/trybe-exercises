import React, { Component } from 'react';
import ValidEmail from './ValidEmail';
import './App.css';

class App extends Component {
  constructor() {
    super() 

    this.state = {
      email: '',
      saveEmail: '',
    }
  }

  changeEmail(value) {
    this.setState({
      email: value,
    })
  }

  changeSaveEmail(value) {
    this.setState({
      saveEmail: value,
      email: '',
    })
  }

  deleteSaveEmail() {
    this.setState({ saveEmail: '' })
  }

  render() {
    const { email, saveEmail } = this.state;

    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
        </label>
        <input 
          id="id-email" 
          type="email" 
          value={email}
          onChange={(e) => this.changeEmail(e.target.value)}
          />
        <input 
          id="btn-send" 
          type="button" 
          data-testid="id-send" 
          value="Enviar"
          onClick={() => this.changeSaveEmail(email)}
        />
        <input 
          id="btn-back" 
          type="button" 
          value="Voltar"
          onClick={ () => this.deleteSaveEmail()}
          />
        <ValidEmail email={saveEmail}/>
      </div>
    );
  }
}

export default App;
