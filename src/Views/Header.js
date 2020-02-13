import React, { Component } from "react";
import "./Header.css"
import Logo from "../img/logo.png"
import Lupa from "../img/lupa.png"
import Aa from "../img/Aa.png"
import Notificacion from "../img/notificacion01.png"
import Foto from "../img/foto.png"
import FlechaAbajo from "../img/flechaAbajo.png"



class ModalProfile extends Component {
    render() {
        return (
            <div className="modalProfile">
                <img src={Foto} alt="fotoPerfil" className="iconModalProfile"></img>
                <h3>Julieta Salgado</h3>
                <h4>julietasalgado@gmail.com</h4>
                <button className="btnBorder">Configuración</button>
                <button className="btnNoBorder">Editar Perfil</button>
                <button className="btnBorder">Cerrar sesión</button>
                <p className="credits">Política de privacidad - Condiciones del Servicio</p>
            </div>
        )
    }
}

class Header extends Component {

    render() {
        return (
            <header className="col-12">
                <div className="col-3 logoContainer">
                    <img src={Logo} alt="logo" className="logo"></img>
                </div>
                <nav className="col-9">
                    <input type="search" placeholder="Buscar" className="search"></input>
                    <button className="btnSearch"><img src={Lupa} alt="lupa" className="icon" /></button>
                    <button className="btnCircle"><img src={Aa} alt="accesibilidad" className="icon" /></button>
                    <button className="btnCircle"><img src={Notificacion} alt="notificacion" className="icon" /></button>
                    <div className="imgCircle">
                        <img src={Foto} alt="fotoPerfil" className="icon"></img>
                    </div>
                    <div className="profile">
                        <h3>Julieta Salgado</h3>
                        <h4>julietasalgado@gmail.com</h4>
                    </div>
                    <button className="btnTransparent"><img src={FlechaAbajo} alt="flecha" className="icon" /></button>
                </nav>
                <ModalProfile />
            </header>
        )
    }
}


export default Header;