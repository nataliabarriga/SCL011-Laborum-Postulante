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
        <Link to="/ProfileOne"><button className="btnColor col-2">Atrás</button></Link>
        <button className="btnColor col-2">Guardar</button>
        <Link to="/ProfileThree"><button className="btnColor col-2">Siguiente</button></Link>
        <Switch>
          <Route exact path="/ProfileOne" component={ProfileOne} />
          <Route exact path="/ProfileThree" component={ProfileThree} />
        </Switch>
      </Router>
    </div>
  );
};

export default ButtonsTwo;

