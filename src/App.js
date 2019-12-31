import React, {useState} from 'react';
import {Provider} from 'react-redux';
import logo from './logo.jpeg';

import Content from './components/Content';
import Footer from './components/Footer';

import './App.css';

import store from './store';

function App() {
  const [currentYear] = useState(new Date().getFullYear())

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Content />

        <Footer currentYear={currentYear} />
      </div>
    </Provider>
  );
}

export default App;
