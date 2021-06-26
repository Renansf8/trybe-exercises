import React from 'react';

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
          <label>
            <textarea 
              name='estadoFavorito'
              onChange={this.handleChange}
              value={this.state.estadoFavorito}
            />
          </label>
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