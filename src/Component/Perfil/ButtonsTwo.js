/* eslint-disable react/button-has-type */
/* eslint-disable import/no-cycle */
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
import React from 'react';
import ProfileOne from '../../Views/ProfileOne';
import ProfileThree from '../../Views/ProfileThree';


const ButtonsTwo = () => {
  return (
    <div>
      <Router>
        <div>
          <Link to="/ProfileOne"><button className="btnColor col-2">Atrás</button></Link>
        </div>
        <div>
          <button type="submit" className="btnColor col-2">Guardar</button>
          <Link to="/ProfileThree"><button className="btnColor col-2">Siguiente</button></Link>
        </div>
        <Switch>
          <Route exact path="/ProfileOne" component={ProfileOne} />
          <Route exact path="/ProfileThree" component={ProfileThree} />
        </Switch>
      </Router>
    </div>
  );
};

export default ButtonsTwo;
