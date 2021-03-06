import React from 'react';
import './WelcomeBar.css';

const WelcomeBar = () => {
  return (
    <div className="welcomebar-container">
      <h1 className="welcome-name">Bienvenid@</h1>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="502px" height="67px" viewBox="38 23.5 502 67">
        <line fill="none" stroke="#FFBD3A" x1="85.1" y1="48.3" x2="193.1" y2="48.3"/>
        <line fill="none" stroke="#8CAFAE" x1="195.1" y1="48.3" x2="303.1" y2="48.3"/>
        <line fill="none" stroke="#8CAFAE" x1="302.6" y1="48.3" x2="410.6" y2="48.3"/>
        <line fill="none" stroke="#8CAFAE" x1="410.2" y1="48.3" x2="518.2" y2="48.3"/>
        <circle fill="#FFBD3A" cx="83.3" cy="48.4" r="6.4"/>
        <circle fill="#8CAFAE" cx="195.1" cy="48.4" r="4.3"/>
        <circle fill="#8CAFAE" cx="302.6" cy="48.4" r="4.3"/>
        <circle fill="#8CAFAE" cx="410.2" cy="48.4" r="4.3"/>
        <circle fill="#8CAFAE" cx="518.8" cy="48.4" r="4.3"/>
        <circle fill="none" stroke="#FFBD3A" stroke-width="2" cx="83.3" cy="48.4" r="9.6"/>
        <circle fill="none" stroke="#8CAFAE" stroke-width="2" cx="195.1" cy="48.4" r="6.5"/>
        <circle fill="none" stroke="#8CAFAE" stroke-width="2" cx="302.6" cy="48.4" r="6.5"/>
        <circle fill="none" stroke="#8CAFAE" stroke-width="2" cx="410.2" cy="48.4" r="6.5"/>
        <circle fill="none" stroke="#8CAFAE" stroke-width="2" cx="518.8" cy="48.4" r="6.5"/>
        <text transform="matrix(1 0 0 1 45.2866 71.7002)" fill="#5E807F" font-family="'Mada-Bold'" font-size="10">Datos Personales</text>
        <text transform="matrix(1 0 0 1 154.8047 71.7002)" fill="#8CAFAE" font-family="'Mada-Bold'" font-size="10">Datos de Contacto</text>
        <text transform="matrix(1 0 0 1 279.8823 71.7002)" fill="#8CAFAE" font-family="'Mada-Bold'" font-size="10">Educación</text>
        <text transform="matrix(1 0 0 1 366.3457 71.7002)" fill="#8CAFAE" font-family="'Mada-Bold'" font-size="10">Experiencia Laboral</text>
        <text transform="matrix(1 0 0 1 504.543 71.7002)" fill="#8CAFAE" font-family="'Mada-Bold'" font-size="10">¡Listo!</text>
      </svg>
    </div>
  );
};

export default WelcomeBar;
