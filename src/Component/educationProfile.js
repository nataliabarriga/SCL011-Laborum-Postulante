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
      <p className="titleComponent">Educación</p>
      <p className="labelComponent">Nombre Institución</p>
      <input
        type="text"
        name="nameInstitution"
        className="input col-9"

        onChange={onChange}
      />

      <p className="labelComponent">Título</p>
      <input
        type="text"
        name="educationTitle"
        className="input col-5"
        onChange={onChange}
      />

      <p className="labelComponent">Desde</p>
      <input
        type="date"
        name="educationSince"
        className="input col-2"
        onChange={onChange}
      />

      <p className="labelComponent">Hasta</p>
      <input
        type="date"
        name="educationUntil"
        className="input col-2"
        onChange={onChange}
      />

      <p className="labelComponent">Descripción</p>
      <input
        type="text"
        name="educationDescription"
        className="textComponent-aboutme col-9"
        onChange={onChange}
      />

      <p className="labelComponent">Área</p>
        <select  className="selectComponent col-4">
          <option>Area 1</option>
          <option>Area 2</option>
           <option>Area 3</option>
        </select>
       

      <button type="submit">Agregar nueva Educación</button>
      <Prueba3 />

    </div>
  );
}


export default Education;
