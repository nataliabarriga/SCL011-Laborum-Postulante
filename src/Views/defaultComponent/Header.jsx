import React from 'react';
import '../../App.css';
import './Header.css';
import Logo from '../../img/logo.png';
import Lupa from '../../img/lupa.png';
import Aa from '../../img/Aa.png';
import Notificacion from '../../img/notificacion01.png';
import Foto from '../../img/foto.png';
import FlechaAbajo from '../../img/flechaAbajo.png';

const Header = () => {
  return (
    <header className="col-12">
      <div className="col-3 logoContainer">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <nav className="col-9 navigation">
        <input type="search" placeholder="Buscar" className="search" />
        <button type="button" className="btnSearch">
          <img src={Lupa} alt="lupa" className="icon" />
        </button>
        <button type="button" className="btnCircle">
          <img src={Aa} alt="accesibilidad" className="icon" />
        </button>
        <button type="button" className="btnCircle">
          <img src={Notificacion} alt="notificacion" className="icon" />
        </button>
        <div className="imgCircle">
          <img src={Foto} alt="fotoPerfil" className="icon" />
        </div>
        <div className="profile">
          <h3>Julieta Salgado</h3>
          <h4>julietasalgado@gmail.com</h4>
        </div>
        <button type="button" className="btnTransparent">
          <img src={FlechaAbajo} alt="flecha" className="icon" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
