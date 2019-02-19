import React, { Component } from 'react';
import logo from './logo.svg';
import slogan from './slogan.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={slogan} className="App-slogan" alt="slogan" />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          </p>
          <a
            className="App"
            href="https://blessedlove.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tecnologia para pessoas
          </a>
        </header>
      </div>
    );
  }
}

export default App;
