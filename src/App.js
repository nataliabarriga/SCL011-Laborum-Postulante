import React from 'react';
import './App.css';
import { ProviderContext } from './Component/Provider';
import PersonalInformation from './Views/personalnformationView';
import JobsView from './Component/cvProfile';
import Header from './Views/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <ProviderContext>
        <PersonalInformation></PersonalInformation>
      </ProviderContext>
      <JobsView></JobsView>
    </div>
  );
}

export default App;
