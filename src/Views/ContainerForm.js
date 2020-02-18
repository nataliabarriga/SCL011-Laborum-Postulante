import React from 'react';
import './ContainerForm.css';
// import Education from '../Component/educationProfile';
import PersonalInfo from './PersonalInfo';

const Container = () => {
  return (
    <div className="container ">
      <div>
        <PersonalInfo />
      </div>
    </div>
  );
};

export default Container;
