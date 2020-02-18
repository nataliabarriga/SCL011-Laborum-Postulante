import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProviderContext } from './Component/Provider';
import './App.css';
// import FilterBar from './Views/FilterBar';
import Home from './Views/defaultComponent/Home';
//import ContainerForm from './Views/ContainerForm';
import Perfil from './Component/personalInformation';
// import Registry from './Component/registry';
// import PersonalInformation from './Views/PersonalInfo';
// import Sidebar from './Views/Sidebar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProviderContext>
          <Home />
          <Switch>
            <Route exact path="/perfil" component={Perfil} />
          </Switch>
        </ProviderContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
