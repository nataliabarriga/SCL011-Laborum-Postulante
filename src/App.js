import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ProviderContext } from './Component/Provider.js';
import './App.css';

// import Input from './Component/personalInformation';
// import Education from './Component/education';
// import WorkExperience from './Component/workExperience';
import Home from './Views/Home';

// rutas

// import Inicio from '';
// import Perfil from './components/Main';
// import Ofertas from '';
// import Postulaciones from '';
// import Consejos from '';
import Perfil from './Views/educationView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProviderContext>
          <Home />
          <div>
            <Switch>
              <Route exact path="/perfil" component={Perfil} />
            </Switch>
          </div>
        </ProviderContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
