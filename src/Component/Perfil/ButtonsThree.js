import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import ProfileTwo from "../../Views/ProfileTwo"
import WorkExperience from "./WorkExperience"

const ButtonsThree = () => {
    return (
        <div>
            <Router>
                <Link to="/ProfileTwo"><button>Atrás</button></Link>
                <button type="submit">Guardar</button>
                <Link to="/WorkExperience"><button>Siguente</button></Link>
                <Switch>
                    <Route exact path="/ProfileTwo" component={ProfileTwo} />
                    <Route exact path="/WorkExperience" component={WorkExperience} />
                </Switch>
            </Router>
        </div>
    );
};

export default ButtonsThree;

