import React from 'react';
import './App.css';
import Registry from './Component/registry';
import { ProviderContext } from './Component/Provider';
import PersonalInformation from './Views/personalnformationView';
import Header from './Views/Header';

function App() {
  return (
    <div className="App">

      <ProviderContext>
        <Registry></Registry>
      </ProviderContext>

    </div>
  );
}

export default App;
