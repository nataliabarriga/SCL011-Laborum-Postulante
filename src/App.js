import React from 'react';
import './App.css';
<<<<<<< HEAD
// import Input from './Component/personalInformation';
import { ProviderContext } from './Component/Provider.js';
import Header from './Views/Header';
// import Education from './Component/education';
import WorkExperience from './Component/workExperience';
=======
import Education from './Component/education';
// import Education from './Views/education';
>>>>>>> 066f51b4d24751be122d068844c5d25ecdfe0016

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <ProviderContext>
        <Header />
        <WorkExperience />
      </ProviderContext>
=======
      <Education />
>>>>>>> 066f51b4d24751be122d068844c5d25ecdfe0016
    </div>
  );
}

export default App;
