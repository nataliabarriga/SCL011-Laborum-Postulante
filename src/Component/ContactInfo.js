import React, { useState } from 'react';

function ContactInfo() {
  const [mail, setMail] = useState('');
  const [backupMail, setBackupMail] = useState('');
  const [prefixPhone, setPrefixPhone] = useState('');
  const [phone, setPhone] = useState('');
  const [backupPhone, setBackupPhone] = useState('');
  const [backupPrefixPhone, setBackupPrefixPhone] = useState('');
  return (
    <div>
      <p>Correo electrónico</p>
      <input type="text" onChange={(event) => setMail(event.target.value)} value={mail} />

      <p>Correo electrónico respaldo</p>
      <input type="text" onChange={(event) => setBackupMail(event.target.value)} value={backupMail} />

      <p>Teléfono</p>
      <input type="text" onChange={(event) => setPrefixPhone(event.target.value)} value={prefixPhone} />
      <input type="text" onChange={(event) => setPhone(event.target.value)} value={phone} />

      <p>Teléfono adicional</p>
      <input type="text" onChange={(event) => setBackupPhone(event.target.value)} value={backupPhone} />
      <input type="text" onChange={(event) => setBackupPrefixPhone(event.target.value)} value={backupPrefixPhone} />

    </div>
  );
}

export default ContactInfo;
