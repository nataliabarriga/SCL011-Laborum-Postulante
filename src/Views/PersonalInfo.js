import React from 'react';
import BasicInformation from '../Component/personalInformation';
import AbautMe from '../Component/abautMe';
import { Prueba } from '../Component/router';
import '../Component/Forms.css';


const PersonalInformation = () => {
  return (
    <div>
      <div className="containerForm">
        <BasicInformation />
        <AbautMe />
        <Prueba></Prueba>
      </div>
    </div>
  );
};

export default PersonalInformation;
