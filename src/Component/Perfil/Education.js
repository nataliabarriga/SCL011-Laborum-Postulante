import React from 'react';
// import db from '../ConfigFirebase/FirebaseInit';
import { useMyContext } from '../Provider';


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
      <div className="icon-title">
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 10.18V14.18L11 18L18 14.18V10.18L11 14L4 10.18ZM11 0L0 6L11 12L20 7.09V14H22V6L11 0Z" fill="black" />
        </svg>
        <p className="titleComponent">Educación</p>
      </div>

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
      <select className="selectComponent col-4">
        <option>Diseño</option>
        <option>Ciencias</option>
        <option>Comunicaciones</option>
      </select>

      <div className="new-component">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 0C3.825 0 0 3.825 0 8.5C0 13.175 3.825 17 8.5 17C13.175 17 17 13.175 17 8.5C17 3.825 13.175 0 8.5 0ZM12.75 9.5625H9.5625V12.75H7.4375V9.5625H4.25V7.4375H7.4375V4.25H9.5625V7.4375H12.75V9.5625Z" fill="black" />
        </svg>
        <button className="new-component-btn" type="submit">Agregar nueva Educación</button>
      </div>

    </div>
  );
}

export default Education;
