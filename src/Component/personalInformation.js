import React from 'react';
// import db from '../ConfigFirebase/FirebaseInit';
import { useMyContext } from './Provider';


const Input = () => {
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
      <p>Información Básica</p>

      <p>Nombres</p>

      <input
        type="text"
        name="nameUser"
        onChange={onChange}
      />

      <p>Apellidos </p>

      <input
        type="text"
        name="lastName"
        onChange={onChange}
      />

      <p>Ciudad , Región ,País</p>

      <input
        type="text"
        name="city"
        onChange={onChange}
      />

      <p>Fecha de nacimiento</p>
      <input type="date" name="dateOfBirth" onChange={onChange} />

    </div>
  );
};

export default Input;
