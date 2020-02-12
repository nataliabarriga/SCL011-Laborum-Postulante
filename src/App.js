import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Component/personalInformation';
import { ProviderContext } from './Component/Provider.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <ProviderContext>
        <Input></Input>
      </ProviderContext>
    </div>
  );
}

export default App;
