import React from 'react';
// import db from '../ConfigFirebase/FirebaseInit';
import { useMyContext } from '../Provider';
import './Forms.css';

const BasicInfo = () => {
  const [myState, dispatch] = useMyContext();

  // const sendFirebase = () => {
  //   db.collection('profilePostulante').add({
  //     nameUser: myState.nameUser,
  //     lastName: myState.lastName,
  //     city: myState.city,
  //     dateOfBirth: myState.dateOfBirth,
  //     stateId: myState.stateId,
  //     abautMe: myState.abautMe,
  //   })
  //     .then((docRef) => {
  //     //  console.log('Document written with ID: ', docRef.id);
  //       dispatch({
  //         type: 'ADD_ID',
  //         payload: docRef.id,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error('Error adding document: ', error);
  //     });
  // };

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
        <svg width="16" height="18" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.27299 3.81818C9.27299 5.62309 7.80518 7.09091 6.00027 7.09091C4.19536 7.09091 2.72754 5.62309 2.72754 3.81818V3.27273C2.72754 1.46782 4.19536 0 6.00027 0C7.80518 0 9.27299 1.46782 9.27299 3.27273V3.81818ZM2.00618 8.71713C4.57255 8.0064 7.428 8.0064 9.99382 8.71713C11.1747 9.0444 12 10.126 12 11.3484V13.0911H0V11.3484C0 10.126 0.825273 9.0444 2.00618 8.71713Z" fill="black"/>
        </svg>
        <p className="titleComponent">Información Básica</p>
      </div>

      <div className="col-4" />
      <p className="labelComponent">Nombres</p>
      <input
        type="text"
        name="nameUser"
        className="input col-8"
        onChange={onChange}
      />

      <p className="labelComponent">Apellidos </p>
      <input
        type="text"
        name="lastName"
        className="input col-8"
        onChange={onChange}
      />

      <p className="labelComponent">Ciudad, Región, País</p>
      <input
        type="text"
        name="city"

        className="input col-4"
        onChange={onChange}
      />

      <p className="labelComponent">Fecha de nacimiento</p>
      <input
        type="date"
        name="dateOfBirth"
        className="input col-2"
        onChange={onChange}
      />
    </div>
  );
};

export default BasicInfo;
