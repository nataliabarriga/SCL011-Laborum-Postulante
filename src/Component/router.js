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
        <Link to="/educación"><button>Siguente</button></Link>
        <Switch>
          <Route exact path="/educación" component={Education} />
        </Switch>
      </Router>
    </div>
  );
};

export const Prueba2 = () => {
  return (
    <div>
      <Router>
        <Link to="/"><button>Atras</button></Link>
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
        <Link to="/"><button>Atras</button></Link>
        <Link to="/otroComponente"><button>Siguente</button></Link>
        <Switch>
          <Route exact path="/" component={PersonalInformation} />
          <Route exact path="/otroComponente" component={OtroComponente} />
        </Switch>
      </Router>
    </div>
  );
};
