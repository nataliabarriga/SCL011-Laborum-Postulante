import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProviderContext } from './Component/Provider';
import './App.css';
// import FilterBar from './Views/FilterBar';
import Home from './Views/defaultComponent/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProviderContext>
          <Home />
          {/* <Switch>
            <Route exact path="/perfil" component={Perfil} />
          </Switch> */}
        </ProviderContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
