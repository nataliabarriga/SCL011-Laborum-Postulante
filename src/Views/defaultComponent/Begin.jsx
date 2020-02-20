/* Primera vista en donde se cargaran los componentes de Login y Registro */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from '../../Component/Login';
import Registry from '../../Component/registry'

const Begin = () => {
  return (
    <header className='App-header'>
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/Home' component={Home} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Registro' component={Registry} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </header>
  );
};

export default Begin;
