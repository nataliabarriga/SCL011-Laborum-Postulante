import React from 'react';
import { Switch, Route } from 'react-router-dom';


// componentes

// import Inicio from '';
// import Perfil from './components/Main';
// import Ofertas from '';
// import Postulaciones from '';
// import Consejos from '';
import Perfil from './Views/education';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/perfil" component={Perfil} />
    <Route exact path="/ofertas" component={Ofertas} />
    <Route exact path="/postulaciones" component={Postulaciones} />
    <Route exact path="/consejos" component={Consejos} />
  </Switch>
);

export default Routes;
