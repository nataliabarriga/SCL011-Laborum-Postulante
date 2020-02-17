import React from 'react';
import './App.css';
import { ProviderContext } from './Component/Provider';
import PersonalInformation from './Views/personalnformationView';
import Header from './Views/Header';

function App() {
  return (
    <div className="App">      
      <ProviderContext>
        <PersonalInformation></PersonalInformation>
      </ProviderContext>
      <Header/>
    </div>
  );
}

export default App;
