import React from 'react';

export function Content(props) {
  
  const fontSize = 36;
  const a = '*';

  return (
    <div style={{ color: 'white', fontSize: fontSize }}>
      Parabéns { a  }, você finalizou o seu mini-teste.
    </div>
  );
}