import React from 'react';
import "./personaInformationView.css"
import Input from '../Component/personalInformation';
import AbautMe from '../Component/abautMe';
import { Prueba } from '../Component/router';


const PersonalInformation = () => {
  return (
    <div>
      <div className="containerForm">
        <Input />
        <AbautMe />
        <Prueba></Prueba>
      </div>
    </div>
  );
};

export default PersonalInformation;
