import React from 'react';
import './App.css';
import Header from './Views/Header';
import FilterBar from './Views/FilterBar';
// import Registry from './Component/registry';
import { ProviderContext } from './Component/Provider';
import PersonalInformation from './Views/PersonalInfo';
import Sidebar from './Views/Sidebar';
import ContainerForm from "./Views/ContainerForm"


function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      {/* <FilterBar/> */}
      <ContainerForm/>
      {/* <ProviderContext>
        <PersonalInformation></PersonalInformation>
      </ProviderContext> */}
    </div>
  );
}

export default App;
