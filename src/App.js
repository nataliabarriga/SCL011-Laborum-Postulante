import React from 'react';
import './App.css';
import Input from './Component/personalInformation';
import ContactInfo from './Views/ContactInfo';
import { ProviderContext } from './Component/Provider';
import Header from './Views/Header';

function App() {
  return (
    <div className="App">
      <ProviderContext>
        <Input />
      </ProviderContext>
      <Header />
      <ContactInfo />
    </div>
  );
}

export default App;
