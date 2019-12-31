import React from 'react';
import PropTypes from 'prop-types';

import './footer.css';

export default function Footer({ currentYear }) {

  return (
    <footer className="Footer-container">
      Aqui temos um footer, { currentYear }
    </footer>
  );
}

Footer.propTypes = {
  currentYear: PropTypes.number
}