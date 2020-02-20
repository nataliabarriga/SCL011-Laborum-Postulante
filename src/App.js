// Acá están las rutas de prueba para pasar el login 
// import Login from "./Component/Login";
// import RegistroPrueba from './Component/RegistroPrueba';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProviderContext } from './Component/Provider';
import './App.css';
import Home from './Views/defaultComponent/Home';
import Begin from './Views/defaultComponent/Begin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProviderContext>
          <Begin />
        </ProviderContext>
      </BrowserRouter>
    </div>
  );
}

export default App;


/** Función de Registro Dani **/
/*
<ProviderContext>
   <Registry></Registry>
 </ProviderContext>
*/


/** Función de Login Pao **/
/*
  <header className='App-header'>
    <BrowserRouter>
      <React.Fragment>
        <Route path='/Home' component={Home}/>
        <Route path='/Login' component={Login}/>
        <Route path='/RegistroPrueba' component={RegistroPrueba}/>
      </React.Fragment>
    </BrowserRouter>
  </header>
*/


/*
<Switch>
  <Route exact path="/perfil" component={Perfil} />
</Switch>
 */