import React, { useState } from 'react';
import './ContactInfo.css';

function Contact() {
  const [mail, setMail] = useState('');
  const [backupMail, setBackupMail] = useState('');
  const [prefixPhone, setPrefixPhone] = useState('');
  const [phone, setPhone] = useState('');
  const [backupPhone, setBackupPhone] = useState('');
  const [backupPrefixPhone, setBackupPrefixPhone] = useState('');
  return (
    <div className="container">
      <h3>Datos de contacto</h3>

      <p className="title2">Correo electrónico</p>
      <input
        type="text"
        onChange={(event) => setMail(event.target.value)}
        value={mail}
      />

      <p className="title2">
        Correo electrónico respaldo
      </p>
      <input
        type="text"
        onChange={(event) => setBackupMail(event.target.value)}
        value={backupMail}
      />

      <p className="title2">Teléfono</p>
      <input
        type="text"
        onChange={(event) => setPrefixPhone(event.target.value)}
        value={prefixPhone}
      />
      <input
        type="text"
        onChange={(event) => setPhone(event.target.value)}
        value={phone}
      />

      <p className="title2">Teléfono adicional</p>
      <input
        type="text"
        onChange={(event) => setBackupPhone(event.target.value)}
        value={backupPhone}
      />
      <input
        type="text"
        onChange={(event) => setBackupPrefixPhone(event.target.value)}
        value={backupPrefixPhone}
      />

    </div>
  );
}

export default Contact;
