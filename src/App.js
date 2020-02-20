// aca estan las rutas de prueba para pasar el login 

/* import Login from "./Component/Login";
import RegistroPrueba from './Component/RegistroPrueba';
 */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProviderContext } from './Component/Provider';

import './App.css';
import Home from './Views/defaultComponent/Home';


function App() {
  return (/*
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


    <div className="App">
      <BrowserRouter>
        <ProviderContext>
          <Home />
          {/* <Switch>
            <Route exact path="/perfil" component={Perfil} />
          </Switch> */}
        </ProviderContext>
      </BrowserRouter>
      {/*     <ProviderContext>
        <Registry></Registry>
      </ProviderContext> */}

    </div>

  );
}

export default App;


// function App() {
//   return (
//     <div className="App">

//       <ProviderContext>
//         <Registry></Registry>
//       </ProviderContext>

//     </div>
//   );
// }

// export default App;
