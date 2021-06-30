import React from 'react';
import EstadoFavorito from './EstadoFavorito';

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      email: '',
    }
  }

  // handleChange({ target }) {
  //   const { name, value } = target;

  //   this.setState({
  //     [name]: value,
  //   })
  // }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <form>
          <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange}/>

          <label>
            <input 
              name='email'
              type='text'
              placeholder='Email'
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;