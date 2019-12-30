import React from 'react';
import PropTypes from 'prop-types';

export function Footer({ currentYear }) {

  return (
    <footer style={{ position: 'absolute', bottom: 0, color: 'white', padding: '15px' }}>
      Aqui temos um footer, { currentYear }
    </footer>
  );
}

Footer.propTypes = {
  currentYear: PropTypes.number
}