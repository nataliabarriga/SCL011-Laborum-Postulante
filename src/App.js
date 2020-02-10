import React from 'react';
import './App.css';
import Input from './Component/personalInformation';
import ContactInfo from './Component/ContactInfo';
import { ProviderContext } from './Component/Provider.js';
import Header from "./Views/Header"

function App() {
  return (
    <div className="App">
      <ProviderContext>
        <Input></Input>
        <ContactInfo />
      </ProviderContext>
      <Header/>
    </div>
  );
}

export default App;
