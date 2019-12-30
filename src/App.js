import React, {useState} from 'react';
import logo from './logo.jpeg';

import Content from './components/Content';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [currentYear] = useState(new Date().getFullYear())
  const [name] = useState('João')
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Content name={name} />

      <Footer currentYear={currentYear} />
    </div>
  );
}

export default App;
