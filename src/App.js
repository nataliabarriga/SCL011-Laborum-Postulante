import React from 'react';
import './App.css';
// import Input from './Component/personalInformation';
import { ProviderContext } from './Component/Provider.js';
import Header from './Views/Header';
// import Education from './Component/education';
import WorkExperience from './Component/workExperience';

function App() {
  return (
    <div className="App">
      <ProviderContext>
        <Header />
        <WorkExperience />
      </ProviderContext>
    </div>
  );
}

export default App;
