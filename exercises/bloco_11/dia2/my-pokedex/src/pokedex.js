import React, { Component } from 'react';
import Data from './data';
import ListPokemons from './pokemon';
import './pokedex.css'

class Pokedex extends Component {
  render() {
    return (
      <div className='container'>
        {Data.map((pokemon) => {
       return <ListPokemons key={pokemon.id} pokemon={pokemon}/>
      })}
      </div>
      
    );
  }
}

export default Pokedex;