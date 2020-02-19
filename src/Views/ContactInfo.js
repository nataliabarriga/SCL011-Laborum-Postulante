import React from 'react';
import '../Component/ContactInfo.css';
import Contact from '../Component/Contact';
import OtherProfiles from '../Component/OtherProfiles';
import Preferences from '../Component/Preferences';

function ContactInfo() {
  return (
    <div>
      <Contact />
      <OtherProfiles />
      <Preferences />
      <button type="button" className="btn">Atrás</button>
    </div>
  );
}

export default ContactInfo;
