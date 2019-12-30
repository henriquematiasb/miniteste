import React from 'react';
import logo from './logo.jpeg';

import Content from './components/Content';
import Footer from './components/Footer';

import './App.css';

function App() {
  const currentYear = new Date().getFullYear()
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Content name="João" />

      <Footer currentYear={currentYear} />
    </div>
  );
}

export default App;
