import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    }
  }

  fetchCaracters = async () => {
  const requestReturn = await fetch('https://rickandmortyapi.com/api/character');
  const requestObject = await requestReturn.json();
  this.setState({
    characters: requestObject.results,
  })
  }

  componentDidMount() {
    this.fetchCaracters();
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ image, name}) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
