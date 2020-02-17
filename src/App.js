import React from 'react';
import './App.css';

import Registry from './Component/registry';
// import Input from './Component/personalInformation';
import { ProviderContext } from './Component/Provider.js';
//import Header from "./Views/Header"

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
