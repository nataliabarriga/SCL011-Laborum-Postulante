import React from 'react';
import './ContactInfo.css';

const Contact = () => {

  return (
    <div className="container">
      <h3>Datos de contacto</h3>

      <p className="title2">Correo electrónico</p>
      <input
        type="text"
        name="mail"
        // onChange={onChange}
      />

      <p className="title2">
        Correo electrónico respaldo
      </p>
      <input
        type="text"
        name="backupMail"
        // onChange={onChange}
      />

      <p className="title2">Teléfono</p>
      <input
        type="text"
        name="prefixPhone"
        // onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        // onChange={onChange}
      />

      <p className="title2">Teléfono adicional</p>
      <input
        type="text"
        name="backupPhone"
        // onChange={onChange}
      />
      <input
        type="text"
        name="backupPrefixPhone"
        // onChange={onChange}
      />

    </div>
  );
};

export default Contact;
