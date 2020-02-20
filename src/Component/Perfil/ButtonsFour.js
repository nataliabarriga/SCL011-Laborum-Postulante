/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';

import db from '../../ConfigFirebase/FirebaseInit';
import { useMyContext } from '../Provider';
import ProfileThree from '../../Views/ProfileThree';
import CV from '../cvProfile';


const ButtonsFour = () => {

  const [myState, dispatch] = useMyContext();

  const sendFirebase = () => {
    db.collection('profilePostulante').add({
      nameUser: myState.nameUser,
      lastName: myState.lastName,
      city: myState.city,
      dateOfBirth: myState.dateOfBirth,
      stateId: myState.stateId,
      aboutMe: myState.aboutMe,
      nameInstitution: myState.nameInstitution,
      urlLinkedin: myState.urlLinkedin,
      mail: myState.mail,
      backupMail: myState.backupMail,
      phone: myState.phone,
      fullTime: myState.fullTime,
      partTime: myState.partTime,
      firstJob: myState.firstJob,
      practice: myState.practice,
      // urlPortafolio: myState.urlPortafolio,
      urlRrss: myState.urlRrss,
      educationTitle: myState.educationTitle,
      educationSince: myState.educationSince,
      educationUntil: myState.educationUntil,
      educationDescription: myState.educationDescription,
      educationArea: myState.educationArea,
      nameWorkInstitution: myState.nameWorkInstitution,
      workTitle: myState.workTitle,
      workSince: myState.workSince,
      workUntil: myState.workUntil,
      workDescription: myState.workDescription,
      workArea: myState.workArea,
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        // dispatch({
        //   type: 'ADD_WORKEXPERIENCE',
        //   payload: docRef.id,
        // });
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  return (
    <div>
       <button onClick={sendFirebase} className="btnColor col-2">Guardar</button>
      <Router>
        <Link to="/ProfileThree"><button className="btnColor col-2">Atrás</button></Link>
        <Link to="/CV"><button type="submit" className="btnColor col-2">Visualizar CV</button></Link>

        <Switch>
          <Route exact path="/ProfileThree" component={ProfileThree} />
          <Route exact path="/CV" component={CV} />
        </Switch>
      </Router>
    </div>
  );
};

export default ButtonsFour;
