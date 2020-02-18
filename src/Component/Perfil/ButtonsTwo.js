import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import ProfileOne from "../../Views/ProfileOne"
import ProfileThree from "../../Views/ProfileThree"

const ButtonsTwo = () => {
    return (
        <div>
            <Router>
                <Link to="/ProfileOne"><button>Atrás</button></Link>
                <button type="submit">Guardar</button>
                <Link to="/ProfileThree"><button>Siguente</button></Link>
                <Switch>
                    <Route exact path="/ProfileOne" component={ProfileOne} />
                    <Route exact path="/ProfileThree" component={ProfileThree} />
                </Switch>
            </Router>
        </div>
    );
};

export default ButtonsTwo;