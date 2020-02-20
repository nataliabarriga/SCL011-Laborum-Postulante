import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import Input from '../Component/personalInformation';
import OtroComponente from './workExperiences';
import Education from './educationProfile';
import PersonalInformation from '../Views/PersonalInfo';

export const Prueba = () => {
  return (
    <div>

      <Router>
        <Link to="/educacion"><button className="btnColor col-2">Siguiente</button></Link>
        <button type="submit" className="btnColor col-2">Guardar</button>
        <Switch>
          <Route exact path="/educacion" component={Education} />
        </Switch>
      </Router>
    </div>
  );
};

export const Prueba2 = () => {
  return (
    <div>
      <Router>
        <Link to="/"><button className="btnColor col-2">Atrás</button></Link>
        <button className="btnColor col-2">Visualizar CV</button>
        <Switch>
          <Route exact path="/educación" component={Input} />
        </Switch>
      </Router>
    </div>
  );
};

export const Prueba3 = () => {
  return (
    <div>
      <Router>
        <Link to="/"><button className="btnColor col-2">Atrás</button></Link>
        <button className="btnColor col-2">Guardar</button>
        <Link to="/otroComponente"><button className="btnColor col-2">Siguiente</button></Link>
        <Switch>
          <Route exact path="/" component={PersonalInformation} />
          <Route exact path="/otroComponente" component={OtroComponente} />
        </Switch>
      </Router>
    </div>
  );
};
