import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import ProfileTwo from "../../Views/ProfileTwo"

const ButtonsOne = () => {
    return (
        <div>
            <Router>
                <Link to="/ProfileTwo"><button>Siguente</button></Link>
                <button type="submit">Guardar</button>
                <Switch>
                    <Route exact path="/ProfileTwo" component={ProfileTwo} />
                </Switch>
            </Router>
        </div>
    );
};

export default ButtonsOne;