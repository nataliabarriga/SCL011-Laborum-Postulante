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
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0.497762V3.55275C7.5 4.21107 8.4375 4.21376 8.4375 3.55275V0.497762C8.4375 -0.172974 7.5 -0.15883 7.5 0.497762ZM2.8125 0.497762V3.55275C2.8125 4.22348 3.75 4.20934 3.75 3.55275V0.497762C3.75 -0.172974 2.8125 -0.15883 2.8125 0.497762ZM12.25 3.55275V0.497762C12.25 -0.15883 13.1875 -0.172974 13.1875 0.497762V3.55275C13.1875 4.21376 12.25 4.21107 12.25 3.55275ZM7.5 14.0117V12.0195H5.625V14.0117H7.5ZM2.8125 14.0117V12.0195H4.6875V14.0117H2.8125ZM10.375 12.0195H8.4375V14.0117H10.375V12.0195ZM2.8125 11.0234V9.03125H4.6875V11.0234H2.8125ZM7.5 11.0234V9.03125H5.625V11.0234H7.5ZM0 15.5059V7.03906H16V15.5059C16 16.3326 15.3719 17 14.5938 17H1.40625C0.628094 17 0 16.3326 0 15.5059ZM13.6562 15.0078C13.9153 15.0078 14.125 14.7851 14.125 14.5098V8.5332C14.125 8.25792 13.9153 8.03516 13.6562 8.03516H2.34375C2.08466 8.03516 1.875 8.25792 1.875 8.5332V14.5098C1.875 14.7851 2.08466 15.0078 2.34375 15.0078H13.6562ZM11.3125 9.03125V11.0234H13.1875V9.03125H11.3125ZM8.4375 9.03125H10.375V11.0234H8.4375V9.03125ZM11.3125 12.0195V14.0117H13.1875V12.0195H11.3125ZM14.125 2.05859H14.5938C15.3719 2.05859 16 2.72598 16 3.55273V6.04297H14.125H12.7188H7.96875H3.28125H0.9375H0V3.55273C0 2.72598 0.628094 2.05859 1.40625 2.05859H1.875V3.05469V3.55273C1.875 4.39028 2.49116 5.04638 3.27759 5.04638C3.62959 5.04638 3.96516 4.9136 4.22241 4.67188C4.52225 4.39075 4.6875 3.99337 4.6875 3.55273V3.05469V2.05859H6.5625V3.05469V3.55273C6.5625 4.38882 7.18047 5.04346 7.96919 5.04346C8.32122 5.04346 8.65584 4.91117 8.91219 4.67042C9.21066 4.38979 9.375 3.99291 9.375 3.55273V3.05469V2.05859H11.3125V3.05469V3.55273C11.3125 4.38882 11.9305 5.04346 12.7192 5.04346C13.0712 5.04346 13.4058 4.91117 13.6622 4.67042C13.9607 4.38979 14.125 3.99291 14.125 3.55273V3.05469V2.05859Z" fill="black"/>
      </svg>
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
