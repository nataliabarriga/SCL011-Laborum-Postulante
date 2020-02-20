import React from 'react';
import { useMyContext } from '../Provider';
import './Forms.css';

const Contact = () => {

  const [myState, dispatch] = useMyContext();

  const onChange = (event) => {
    dispatch({
      type: 'ADD_CONTACT',
      field: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div>
      <div className="icon-title">
        <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5059 0H1.49414C0.670238 0 0 0.670238 0 1.49414V11.4551C0 12.279 0.670238 12.9492 1.49414 12.9492H15.5059C16.3298 12.9492 17 12.279 17 11.4551V1.49414C17 0.670238 16.3298 0 15.5059 0ZM10.5254 2.98828H13.5137C14.1702 2.98828 14.1729 3.98438 13.5137 3.98438H10.5254C9.86887 3.98438 9.86618 2.98828 10.5254 2.98828ZM7.96875 9.46289C7.96875 10.2868 7.29851 10.957 6.47461 10.957H3.48633C2.66243 10.957 1.99219 10.2868 1.99219 9.46289V8.96484C1.99219 7.31701 3.33263 5.97656 4.98047 5.97656C6.62831 5.97656 7.96875 7.31701 7.96875 8.96484V9.46289ZM4.98047 5.97656C3.88224 5.97656 2.98828 5.0831 2.98828 3.98438C2.98828 2.88565 3.88224 1.99219 4.98047 1.99219C6.0787 1.99219 6.97266 2.88565 6.97266 3.98438C6.97266 5.0831 6.0787 5.97656 4.98047 5.97656ZM14.5098 9.96094H9.5293C8.87277 9.96094 8.87008 8.96484 9.5293 8.96484H14.5098C15.1663 8.96484 15.169 9.96094 14.5098 9.96094ZM14.5098 7.96875H9.5293C8.87277 7.96875 8.87008 6.97266 9.5293 6.97266H14.5098C15.1663 6.97266 15.169 7.96875 14.5098 7.96875ZM14.5098 5.97656H9.5293C8.87277 5.97656 8.87008 4.98047 9.5293 4.98047H14.5098C15.1663 4.98047 15.169 5.97656 14.5098 5.97656ZM4.98047 2.98828C4.43086 2.98828 3.98438 3.43526 3.98438 3.98438C3.98438 4.53349 4.43086 4.98047 4.98047 4.98047C5.53008 4.98047 5.97656 4.53349 5.97656 3.98438C5.97656 3.43526 5.53008 2.98828 4.98047 2.98828ZM2.98828 8.96484C2.98828 7.86612 3.88224 6.97266 4.98047 6.97266C6.0787 6.97266 6.97266 7.86612 6.97266 8.96484V9.46289C6.97266 9.73768 6.74893 9.96094 6.47461 9.96094H3.48633C3.212 9.96094 2.98828 9.73768 2.98828 9.46289V8.96484Z" fill="black" />
        </svg>
        <p className="titleComponent">Datos de contacto</p>
      </div>

      <p className="labelComponent">Correo electrónico</p>
      <input
        type="text"
        name="mail"
        className="input col-4"
        onChange={onChange}
      />

      <p className="labelComponent">Correo electrónico respaldo</p>
      <input
        type="text"
        className="input col-4"
        name="backupMail"
        onChange={onChange}
      />

      <p className="labelComponent">Teléfono</p>
      <input
        type="text"
        className="input col-1"
        placeholder="+569"
        name="prefixPhone"
        onChange={onChange}
      />
      <input
        type="text"
        className="input col-3"
        name="phone"
        onChange={onChange}
      />

      <p className="labelComponent">Teléfono adicional</p>
      <input
        type="text"
        className="input col-1"
        placeholder="+569"
        name="backupPhone"
        onChange={onChange}
      />
      <input
        type="text"
        className="input col-3"
        name="backupPrefixPhone"
        onChange={onChange}
      />

    </div>
  );
};

export default Contact;
