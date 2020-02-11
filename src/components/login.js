import React from 'react';
import firebase from "firebase/app";

import 'firebase/auth'
import './style/login.css';


class Login extends React.Component {
    //Al escribir en el input se vea lo que escriba
    handleChange = e => {
        console.log({
            name: e.target.name,
            value: e.target.value
        });
    };
    // al hacer click haga la funcion
    handleClick = e => {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        console.log(email, password);
        const createAccount = (email, password) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(result => {
                    //result user es igual a usuario de cuenta creada
                    console.log(result.user)
                    result.user.updateProfile({
                        display: email
                    });
                });
        };
        createAccount();
    };

    //funcion para que el boton solo tenga su funcionalidad de boton y no se envie
    handleSubmit = e => {
        e.preventDefault();
        console.log("Form was submitted")
    };
    render() {
        return (
            <div>
                <h1>Registrate</h1>
                <h3>Registro</h3>
                <form className="container-form" onSubmit={this.handleSubmit}>
                    <label >Correo</label>
                    <input onChange={this.handleChange} type="email" name="email" id="email" className="email" placeholder="Email" />
                    <label >Contraseña</label>
                    <input onChange={this.handleChange} type="password" name="password" id="password" className="password" placeholder="Clave" />
                    <button onClick={this.handleClick} id="btnRegistry">Crear cuenta</button>
                </form>
            </div>
        )
    }
}
export default Login;

