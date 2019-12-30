import React, {useState} from 'react';
import logo from './logo.jpeg';

import Content from './components/Content';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [currentYear] = useState(new Date().getFullYear())
  const [name, setName] = useState('...')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Content name={name} setName={setName} />

      <Footer currentYear={currentYear} />
    </div>
  );
}

export default App;
