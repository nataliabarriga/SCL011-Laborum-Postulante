import React from 'react';
// import db from '../ConfigFirebase/FirebaseInit';
import { useMyContext } from './Provider';
import { Prueba3 } from './router';


function Education() {
  const [myState, dispatch] = useMyContext();

  // const sendFirebase = () => {
  //   db.collection('profile').add({
  //     nameInstitution: myState.nameInstitution,
  //     educationTitle: myState.educationTitle,
  //     educationSince: myState.educationSince,
  //     educationUntil: myState.educationUntil,
  //     educationDescription: myState.educationDescription,
  //     educationArea: myState.educationArea,
  //   })
  //     .then((docRef) => {
  //     //  console.log('Document written with ID: ', docRef.id);
  //       dispatch({
  //         type: 'ADD_EDUCATION',
  //         payload: docRef.id,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error('Error adding document: ', error);
  //     });
  // };

  const onChange = (event) => {
    dispatch({
      type: 'ADD_EDUCATION',
      field: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div>
      <h3>Educación</h3>
      <p>Nombre Institución</p>
      <input
        type="text"
        name="nameInstitution"
        onChange={onChange}
      />

      <p>Título</p>
      <input
        type="text"
        name="educationTitle"
        onChange={onChange}
      />

      <p>Desde</p>
      <input
        type="date"
        name="educationSince"
        onChange={onChange}
      />

      <p>Hasta</p>
      <input
        type="date"
        name="educationUntil"
        onChange={onChange}
      />

      <p>Descripción</p>
      <input
        type="text"
        name="educationDescription"
        onChange={onChange}
      />

      <p>Área</p>
      <input
        type="text"
        name="educationArea"
        onChange={onChange}
      />

      <button type="submit">Agregar nueva Educación</button>
      <button>Guardar</button>
      <Prueba3 />

    </div>
  );
}


export default Education;
