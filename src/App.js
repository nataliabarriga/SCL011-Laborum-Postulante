import React from 'react';
import './App.css';
import Header from './Views/Header';
import FilterBar from './Views/FilterBar';
import Registry from './Component/registry';
import { ProviderContext } from './Component/Provider';
import PersonalInformation from './Views/personalnformationView';


function App() {
  return (
    <div className="App">

      <Header/>
      <FilterBar/>
      <ProviderContext>
        <PersonalInformation></PersonalInformation>
      </ProviderContext>
    <Registry></Registry>
    </div>
  );
}

export default App;
