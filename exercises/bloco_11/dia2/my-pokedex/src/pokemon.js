import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './pokemon.css'

class ListPokemons extends Component {
  render() {
    return (
      <div className='pokemon-container'>
        <div>
          <p>{this.props.pokemon.name}</p>
          <p>{this.props.pokemon.type}</p>
          <p>{this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</p>
        </div>
        <div>
          <img src={this.props.pokemon.image}/>
        </div>
      </div>
    );
  }
}

ListPokemons.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string,
  image: PropTypes.string
}

export default ListPokemons;