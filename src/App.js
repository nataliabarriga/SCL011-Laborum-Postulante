import React from 'react';
import './App.css';
import { ProviderContext } from './Component/Provider';
import PersonalInformation from './Views/personalnformationView';
import Header from './Views/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <ProviderContext>
        <PersonalInformation></PersonalInformation>
      </ProviderContext>
    </div>
  );
}

export default App;
