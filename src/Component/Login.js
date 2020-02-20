/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { withRouter, Link } from "react-router-dom";
import firebase from "firebase";
import "./Login.css";
import logo from "../img/logo.png";
import egresada from "../img/mono (1).png";
import yellowBox from '../img/home-lab.jpg';

const Login = props => {
  const singIn = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

      .then(() => {
        console.log("hola");
        props.history.push("/Home");
      })

      .catch(function(error) {
        // Handle error.
        console.log(error);
      });
  };

  const handleClick = () => {
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;
    singIn(email, password);
    console.log("hola", email);
  };

  return (
    <div className="container-principal">
      <div>
        <img src={logo} alt="logo laboratoria" className="logoLaboratoria" />
      </div>

      <div className='container-left'>
        <h3>Conecta con ofertas exclusivas</h3>
        <h5>Inicio sesión</h5>

          <div className="col-md-3">
            <label className="title-label">Correo</label>
            <input
              id="Email"
              type="Email"
              placeholder="Ingrese Correo"
              className="form-control"
            />
          </div>

          <div className="col-md-3">
            <label className="title-label">Contraseña</label>
            <input
              id="Password"
              type="Password"
              placeholder="Ingrese Clave"
              className="form-control"
            />
          </div>
            <div>
              <p>Recuerdame -- Olvidaste tu contraseña</p>
            </div>

          <div className="col-md-3">
            <button type="submit" className="btn-create-account" onClick={handleClick}>
              Inicia sesión
            </button>

            <div className="cuenta">
              <p className="texto">¿No tienes cuenta?</p>
              <Link to="/Registro" className="textoRegistry">Registrate</Link>
            </div>
          </div>
        </div>

      <div className='cont-Img-Egresada'>
        <img src={egresada} alt="img laborum" className="img-Login" />
      </div>

      <div className="container-background">
       <img src={yellowBox} alt='img Box' className='YellowBox'/>
      </div>

    </div>
  );
};

export default withRouter(Login);
