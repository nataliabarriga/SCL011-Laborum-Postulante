import React from 'react';
import './Forms.css';

function Preferences() {
  return (
    <div className="container">
      <h3>Preferencias</h3>
      <label
        htmlFor="fullTime"
        className="title2"
      >
        Full Time
        <input
          type="checkbox"
          name="fullTime"
          // onChange={onChange}
        />
      </label>
      <br />
      <label
        htmlFor="partTime"
        className="title2"
      >
        Part Time
        <input
          type="checkbox"
          name="partTime"
          // onChange={onChange}
        />
      </label>
      <br />
      <label
        htmlFor="firstJob"
        className="title2"
      >
        Primeros empleos
        <input
          type="checkbox"
          name="firstJob"
          // onChange={onChange}
        />
      </label>
      <br />
      <label
        htmlFor="practice"
        className="title2"
      >
        Prácticas
        <input
          type="checkbox"
          name="practice"
          // onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Preferences;
