import React from 'react';
import './Forms.css';

const OtherProfiles = () => {
  return (
    <div className="container">
      <h3>Otros perfiles</h3>

      <p className="title2">URL Linkedin</p>
      <input
        type="text"
        name="urlLinkedin"
        // onChange={onChange}
      />

      <p className="title2">URL Portafolio (Behance, Dribbble, etc.)</p>
      <input
        type="text"
        name="urlPortfolio"
        // onChange={onChange}
      />

      <p className="title2">URL Redes sociales (Facebook, Twitter, Instagram, etc.)</p>
      <input
        type="text"
        name="urlRrss"
        // onChange={onChange}
      />
    </div>
  );
};

export default OtherProfiles;
