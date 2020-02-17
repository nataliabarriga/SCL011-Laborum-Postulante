import React from 'react';
import db from '../ConfigFirebase/FirebaseInit';
import { useMyContext } from './Provider';
import { Prueba2 } from './router';


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

  const onChange = (event) => {
    dispatch({
      type: 'ADD_INFORMATION',
      field: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div>
      <h3>Experiencia Laboral</h3>
      <p>Nombre Institución</p>
      <input
        type="text"
        name="nameWorkInstitution"
        onChange={onChange}
      />

      <p>Título</p>
      <input
        type="text"
        name="workTitle"
        onChange={onChange}
      />

      <p>Desde</p>
      <input
        type="date"
        name="workSince"
        onChange={onChange}
      />

      <p>Hasta</p>
      <input
        type="date"
        name="workUntil"
        onChange={onChange}
      />

      <p>Descripción</p>
      <input
        type="text"
        name="workDescription"
        onChange={onChange}
      />

      <p>Área</p>
      <input
        type="text"
        name="workArea"
        onChange={onChange}
      />

      <button type="submit">Agregar nueva experiencia laboral</button>
      <button onClick={sendFirebase}>Guardar</button>
      <Prueba2></Prueba2>
    </div>
  );
}

export default WorkExperience;
