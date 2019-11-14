import React from 'react';

export function Footer({ year }) {

  return (
    <footer style={{ position: 'absolute', bottom: 0, color: 'white', padding: '15px' }}>
      Aqui temos um footer, { ano }
    </footer>
  );
}