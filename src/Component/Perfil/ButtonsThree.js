/* eslint-disable react/button-has-type */
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
import React from 'react';
import ProfileTwo from '../../Views/ProfileTwo';
import WorkExperience from './WorkExperience';


const ButtonsThree = () => {
  return (
    <div>
      <Router>
        <Link to="/ProfileTwo"><button className="btnColor col-2">Atrás</button></Link>
        <button type="submit" className="btnColor col-2">Guardar</button>
        <Link to="/ProfileThree"><button className="btnColor col-2">Siguiente</button></Link>
        <Switch>
          <Route exact path="/ProfileTwo" component={ProfileTwo} />
          <Route exact path="/WorkExperience" component={WorkExperience} />
        </Switch>
      </Router>
    </div>
  );
};

export default ButtonsThree;

