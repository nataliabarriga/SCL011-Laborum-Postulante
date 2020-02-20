import React from 'react';
import BasicInfo from '../Component/Perfil/BasicInfo';
import AboutYou from '../Component/Perfil/AboutYou';
import ButtonsOne from '../Component/Perfil/ButtonsOne';
import WelcomeBar from '../Component/Perfil/WelcomeBar';

const ProfileOne = () => {
  return (
    <div>
      <WelcomeBar />
      <BasicInfo />
      <AboutYou />
      <ButtonsOne />
    </div>
  );
};

export default ProfileOne;
