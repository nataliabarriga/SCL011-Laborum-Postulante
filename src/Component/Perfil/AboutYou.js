import React from 'react';
import { useMyContext } from '../Provider';


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
      <p className="titleComponent">Sobre Tí</p>

      <p className="labelComponent">Haz una pequeña descripción de ti, tus intereses y tu experiencia.</p>
      <input
        type="text"
        name="abautMe"
        className="textComponent-aboutme col-8"
        onChange={onChange}
      />

      <p className="labelComponent">Situacíon laboral Actual</p>
      <select className="selectComponent col-4">
        <option>Estudiante</option>
        <option>Estudiante 2</option>
        <option>Estudiate 3</option>
      </select>
    </div>

  );
};

export default AboutYou;
