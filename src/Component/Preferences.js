import React, { useState } from 'react';
import './ContactInfo.css';

function Preferences() {
  const [fullTime, setFullTime] = useState('');
  const [partTime, setPartTime] = useState('');
  const [firstJob, setFirstJob] = useState('');
  const [practice, setPractice] = useState('');
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
          onChange={(event) => setFullTime(event.target.value)}
          value={fullTime}
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
          onChange={(event) => setPartTime(event.target.value)}
          value={partTime}
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
          onChange={(event) => setFirstJob(event.target.value)}
          value={firstJob}
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
          onChange={(event) => setPractice(event.target.value)}
          value={practice}
        />
      </label>
    </div>
  );
}

export default Preferences;
