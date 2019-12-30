import React from 'react';
import PropTypes from 'prop-types';

export function Content({ name }) {
  
  const fontSize = 36;

  return (
    <div style={{ color: 'white', fontSize: fontSize }}>
      Parabéns { name }, você finalizou o seu mini-teste.
    </div>
  );
}

Content.propTypes = {
  name: PropTypes.string,
}