import React from 'react';
import BasicInfo from '../Component/Perfil/BasicInfo';
import AboutYou from '../Component/Perfil/AboutYou';
import ButtonsOne from '../Component/Perfil/ButtonsOne';


const ProfileOne = () => {
  return (
    <div>
      <div>
        <BasicInfo />
        <AboutYou />
        <ButtonsOne />
      </div>
    </div>
  );
};

export default ProfileOne;
