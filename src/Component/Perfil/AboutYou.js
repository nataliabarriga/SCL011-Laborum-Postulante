import React from 'react';
import { useMyContext } from "../Provider";

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
      <p>Sobre Mí</p>

      <input
        type="text"
        name="abautMe"
        onChange={onChange}
      />

      <p>Situacíon laboral Actual</p>
      <select >
        <option>Estudiante</option>
        <option>Estudiante 2</option>
        <option>Estudiate 3</option>
      </select>
      <button>Guardar</button>
    </div>

  );
};

export default AboutYou;
