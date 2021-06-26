import React from 'react';

class EstadoFavorito extends React.Component {
  render() {
    const { handleChange, value } = this.props;

    let error = undefined;
    if (value.length > 50) error = 'Texto muito grande';

    return (
      <label>
        <textarea 
          name='estadoFavorito'
          onChange={handleChange}
          value={value}
        />
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default EstadoFavorito;