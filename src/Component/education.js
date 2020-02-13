import React, { useState } from 'react';


function Education() {
  const [nameInstitution, setnameInstitution] = useState('');
  const [title, setTitle] = useState('');
  const [since, setSince] = useState('');
  const [until, setUntil] = useState('');
  const [description, setDescription] = useState('');
  const [area, setArea] = useState('');

 

  return (
    <div>
      <h3>Educación</h3>
      <form action={}>
        <p>Nombre Institución</p>
        <input type="text" onChange={(event) => setnameInstitution(event.target.value)} value={nameInstitution} />

        <p>Título</p>
        <input type="text" onChange={(event) => setTitle(event.target.value)} value={title} />

        <p>Desde</p>
        <input type="date" onChange={(event) => setSince(event.target.value)} value={since} />

        <p>Hasta</p>
        <input type="date" onChange={(event) => setUntil(event.target.value)} value={until} />

        <p>Descripción</p>
        <input type="text" onChange={(event) => setDescription(event.target.value)} value={description} />

        <p>Área</p>
        <input type="text" onChange={(event) => setArea(event.target.value)} value={area} />

        <button type="submit">Agregar nueva experiencia laboral</button>
      </form>

    </div>
  );
}


export default Education;
