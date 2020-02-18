import React from 'react';
import { Router, Link, Switch, Route } from 'react-router-dom';
import db from '../../ConfigFirebase/FirebaseInit';

import { useMyContext } from '../Provider';
import ProfileThree from '../../Views/ProfileThree';


function WorkExperience() {
  const [myState, dispatch] = useMyContext();

  const sendFirebase = () => {
    db.collection('profilePostulante').add({
      nameUser: myState.nameUser,
      lastName: myState.lastName,
      city: myState.city,
      dateOfBirth: myState.dateOfBirth,
      stateId: myState.stateId,
      abautMe: myState.abautMe,
      nameInstitution: myState.nameInstitution,
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

  const ButtonsFour = () => {
    return (
      <div>
        <Router>

          <Link to="/ProfileThree"><button className="btnColor col-2">Atrás</button></Link>
          <button className="btnColor col-2">Guardar</button>
          <Link to="/"><button type="submit" onclikc={sendFirebase} className="btnColor col-2">Visualizar CV</button></Link>

          <Switch>
            <Route exact path="/ProfileThree" component={ProfileThree} />
          </Switch>
        </Router>
      </div>
    );
  };

  const onChange = (event) => {
    dispatch({
      type: 'ADD_INFORMATION',
      field: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div>

      <p className="titleComponent">Experiencia Laboral</p>
      <p className="labelComponent">Nombre Institución</p>
      <input
        type="text"
        name="nameWorkInstitution"
        className="input col-9"
        onChange={onChange}
      />

      <p className="labelComponent">Desde</p>
      <input
        type="date"
        name="workSince"
        className="labelComponent"
        className="input col-2"
        onChange={onChange}
      />

      <p className="labelComponent">Hasta</p>
      <input
        type="date"
        name="workUntil"
        className="input col-2"
        onChange={onChange}
      />

      <p className="labelComponent">Cargo</p>
      <input
        type="text"
        name="workTitle"
        className="labelComponent"
        className="input col-5"
        onChange={onChange}
      />

      <p className="labelComponent">Descripción</p>
      <input
        type="text"
        name="workDescription"
        className="textComponent-aboutme col-9"
        onChange={onChange}
      />

      <p className="labelComponent">Área</p>
      <select className="selectComponent col-4">
        <option>Diseño</option>
        <option>Comercio</option>
        <option>Gestión</option>
      </select>

      <button type="submit">Agregar nueva experiencia laboral</button>

      <ButtonsFour />
    </div>
  );
}

export default WorkExperience;
