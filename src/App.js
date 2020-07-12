import React from 'react';

import CSSAnimation from './components/CSSAnimation';
import MotionUI from './components/MotionUI'

import logo from './logo.svg';
import './App.scss';
import 'animate.css';

function App() {
  return (
    <div className="scroll-snap">
      <section className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="animate__animated animate__bounce">An animated element</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </section>
      <MotionUI />
      <CSSAnimation />
    </div>
  );
}

export default App;
