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
          <img src={this.props.pokemon.image} alt='pokemon'/>
        </div>
      </div>
    );
  }
}

ListPokemons.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default ListPokemons;