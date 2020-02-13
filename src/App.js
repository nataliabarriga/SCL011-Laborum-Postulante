import React from 'react';
import './App.css';
<<<<<<< HEAD
import Input from './Component/personalInformation';
import ContactInfo from './Component/ContactInfo';
import { ProviderContext } from './Component/Provider.js';
import Header from "./Views/Header"
=======
import ContactInfo from './Views/ContactInfo';
>>>>>>> CSS not ready yet. Contact info view ok

function App() {
  return (
    <div className="App">
      <ProviderContext>
        <Input></Input>
        <ContactInfo />
      </ProviderContext>
      <Header/>
    </div>
  );
}

export default App;
