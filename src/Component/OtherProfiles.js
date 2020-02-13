import React, { useState } from 'react';
import './ContactInfo.css';

function OtherProfiles() {
  const [urlLinkedin, setUrlLinkedin] = useState('');
  const [urlPortfolio, setUrlPortfolio] = useState('');
  const [urlRrss, setUrlRrss] = useState('');
  return (
    <div className="container">
      <h3>Otros perfiles</h3>

      <p className="title2">URL Linkedin</p>
      <input
        type="text"
        onChange={(event) => setUrlLinkedin(event.target.value)}
        value={urlLinkedin}
      />

      <p className="title2">URL Portafolio (Behance, Dribbble, etc.)</p>
      <input
        type="text"
        onChange={(event) => setUrlPortfolio(event.target.value)}
        value={urlPortfolio}
      />

      <p className="title2">URL Redes sociales (Facebook, Twitter, Instagram, etc.)</p>
      <input
        type="text"
        onChange={(event) => setUrlRrss(event.target.value)}
        value={urlRrss}
      />
    </div>
  );
}

export default OtherProfiles;
