// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Ourteam from './components/Ourteam';
import Rodape from './components/Rodape';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Ourteam />
      <Rodape />
    </div>
  );
}

export default App;
