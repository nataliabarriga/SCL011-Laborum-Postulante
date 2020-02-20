import React from 'react';
import { useMyContext } from '../Provider';
import './Forms.css';


const AboutYou = () => {
  const [myState, dispatch] = useMyContext();
  const onChange = (event) => {
    dispatch({
      type: 'ADD_INFORMATION',
      field: event.target.name,
      value: event.target.value,
    });
  };
  return (
    <div>
      <div className="icon-title">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2875 0.3375L17.6625 3.7125C18.1125 4.1625 18.1125 4.8375 17.6625 5.2875L15.6375 7.3125L10.6875 2.3625L12.7125 0.3375C13.1625 -0.1125 13.8375 -0.1125 14.2875 0.3375ZM0.3375 12.7125L9.1125 3.9375L14.0625 8.88751L5.2875 17.6625C5.0625 17.8875 4.8375 18 4.5 18H1.125C0.45 18 0 17.55 0 16.875V13.5C0 13.1625 0.1125 12.9375 0.3375 12.7125Z" fill="black"/>
      </svg>
      <p className="titleComponent">Sobre Tí</p>
      </div>

      <p className="labelComponent">Haz una pequeña descripción de ti, tus intereses y tu experiencia.</p>
      <input
        type="text"
        name="aboutMe"
        className="textComponent-aboutme col-8"
        onChange={onChange}
      />

      <p className="labelComponent">Situación laboral Actual</p>
      <select name="actualJob" className="selectComponent col-4">
        <option>Estudiante</option>
        <option>Empleado</option>
        <option>Independiente</option>
      </select>

    </div>

  );
};

export default AboutYou;
