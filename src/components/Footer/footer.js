import React, {useState} from 'react';

import './footer.css';

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear())

  return (
    <footer className="Footer-container">
      Aqui temos um footer, { currentYear }
    </footer>
  );
}