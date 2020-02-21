import React from 'react';
import Contact from '../Component/Perfil/Contact';
import OtherProfiles from '../Component/Perfil/OtherProfiles';
import Preferences from '../Component/Perfil/Preferences';
import ButtonsTwo from '../Component/Perfil/ButtonsTwo';


const ProfileTwo = () => {
  return (
    <div>
      <div>
        <Contact />
        <OtherProfiles />
        <Preferences />
        <ButtonsTwo />
      </div>
    </div>
  );
};

export default ProfileTwo;
