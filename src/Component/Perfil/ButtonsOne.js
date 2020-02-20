/* eslint-disable import/no-cycle */
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
import React from 'react';
import ProfileTwo from '../../Views/ProfileTwo';


const ButtonsOne = () => {
  return (
    <div>
      <Router>
        <Link to="/ProfileTwo"><button className="btnColor col-2">Siguiente</button></Link>
        <button type="submit" className="btnColor col-2">Guardar</button>
        <Switch>
          <Route exact path="/ProfileTwo" component={ProfileTwo} />
        </Switch>
      </Router>
    </div>
  );
};

export default ButtonsOne;
