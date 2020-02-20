/* eslint-disable import/no-cycle */
/* eslint-disable react/button-has-type */
import React from 'react';
/* import {
  Router, Link, Switch, Route,
} from 'react-router-dom'; */
//import db from '../../ConfigFirebase/FirebaseInit';
import { useMyContext } from '../Provider';
// import ProfileThree from '../../Views/ProfileThree';
import ButtonsFour from './ButtonsFour';


function WorkExperience() {
  const [myState, dispatch] = useMyContext();

/*   const sendFirebase = () => {
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
  }; */

  /* const ButtonsFour = () => {
    return (
      <div>
        <Router>
          <Link to="/ProfileThree"><button className="btnColor col-2">Atrás</button></Link>
          <button className="btnColor col-2">Guardar</button>
          <Link to="/"><button type="submit" onClick={sendFirebase} className="btnColor col-2">Visualizar CV</button></Link>

          <Switch>
            <Route exact path="/ProfileThree" component={ProfileThree} />
          </Switch>
        </Router>
      </div>
    );
  }; */

  const onChange = (event) => {
    dispatch({
      type: 'ADD_INFORMATION',
      field: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div>
      <div className="icon-title">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.3 3.36842H11.9V1.68421C11.9 0.749474 11.1435 0 10.2 0H6.8C5.8565 0 5.1 0.749474 5.1 1.68421V3.36842H1.7C0.7565 3.36842 0.00849999 4.11789 0.00849999 5.05263L0 14.3158C0 15.2505 0.7565 16 1.7 16H15.3C16.2435 16 17 15.2505 17 14.3158V5.05263C17 4.11789 16.2435 3.36842 15.3 3.36842ZM10.2 3.36842H6.8V1.68421H10.2V3.36842Z" fill="black"/>
        </svg>
        <p className="titleComponent">Experiencia Laboral</p>
      </div>

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

      <div className="new-component">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 0C3.825 0 0 3.825 0 8.5C0 13.175 3.825 17 8.5 17C13.175 17 17 13.175 17 8.5C17 3.825 13.175 0 8.5 0ZM12.75 9.5625H9.5625V12.75H7.4375V9.5625H4.25V7.4375H7.4375V4.25H9.5625V7.4375H12.75V9.5625Z" fill="black" />
        </svg>
        <button className="new-component-btn" type="submit">Agregar nueva Experiencia laboral</button>
      </div>

      <ButtonsFour />
    </div>
  );
}

export default WorkExperience;
