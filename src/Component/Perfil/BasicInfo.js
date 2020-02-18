import React from 'react';
// import db from '../ConfigFirebase/FirebaseInit';
import { useMyContext } from '../Provider';

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
    <div className="border">
      <p className="titleComponent">Información Básica</p>

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
