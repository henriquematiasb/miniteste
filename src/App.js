import React from 'react';
import logo from './logo.jpeg';

import Content from './components/Content';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Content nome="João" />

      <Footer year="1999" />
    </div>
  );
}

export default App;
