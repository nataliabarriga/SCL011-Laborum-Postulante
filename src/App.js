import React from 'react';
import './App.css';
import Input from './Component/personalInformation';
import { ProviderContext } from './Component/Provider.js';
import Header from './Views/Header';

function App() {
  return (
    <div className="App">
      <ProviderContext>
        <Input></Input>
      </ProviderContext>
      <Header />
    </div>
  );
}

export default App;
