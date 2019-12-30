import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

export function Content({ name, setName }) {

  useEffect(() => {
    function insertName() {
      setTimeout(() => {
        setName('João')
      }, 5000)
    }

    insertName()
  }, [setName])
  
  const fontSize = 36;

  return (
    <div style={{ color: 'white', fontSize: fontSize }}>
      Parabéns { name }, você finalizou o seu mini-teste.
    </div>
  );
}

Content.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
}