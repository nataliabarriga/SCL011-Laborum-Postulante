import React from 'react';
import { auth } from '../ConfigFirebase/FirebaseInit';
//import './registry.css';
import logo from '../img/logo.png';
import laborum from '../img/laborum.png';
import yellowBox from '../img/home-lab.jpg';

class Registry extends React.Component {
    handleChange = e => {
        console.log({
            email: e.target.email,
            value: e.target.value
        });
    };
    // al hacer click haga la funcion
    handleClick = e => {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        console.log(email, password);
        const createAccount = (email, password) => {
            auth.createUserWithEmailAndPassword(email, password)
                .then(result => {
                    //result user es igual a usuario de cuenta creada
                    console.log(result.user)
                    result.user.updateProfile({
                        display: result.user
                    });
                    // 2 creamos el envio de mensaje de verificación y su configuración, configuramos para ue se redireccione el link de verificacion que llega l email
                    const configuracion = {
                        url: 'http://localhost:3000'
                    }
                    // envio de mensaje de verificacion
                    result.user.sendEmailVerification(configuracion)
                        .catch(err => {
                            alert(err.menssage)
                        })
                    //3 si el usuario no esta verificado no puee ver la pagina
                    auth.signOut()
                    alert(`Hola verifica en tu email`)
                })
                // 1 error de registro
                .catch(err => {
                    console.error(err.message)
                })
        };
        createAccount(email, password);
    };



    //funcion para que el boton solo tenga su funcionalidad de boton y no se envie
    handleSubmit = e => {
        e.preventDefault();
        console.log("Form was submitted")
    };

    render() {
        return (
            <div className="container-principal col-12">
                <form className="container-form col-4" onSubmit={this.handleSubmit}>
                    <div>
                        <img src={logo} alt="logo laboratoria" className="logoLaboratoria" />
                    </div>
                    <div className="container-title-registry">
                        <h3 className="registrate">Registrate</h3>
                    </div>
                    <h5 className="registro col-2">Registro</h5>
                    <label className="title-label col-2" >Correo</label>
                    <input onChange={this.handleChange} type="email" name="email" id="email" className="email" />
                    <label className="title-label col-2" >Contraseña</label>
                    <input onChange={this.handleChange} type="password" name="password" id="password" className="password" />
                    <label className="title-label col-2" >Institución</label>
                    <input onChange={this.handleChange} type="text" name="institution" id="institution" className="institution" />
                    <button onClick={this.handleClick} id="btnRegistry" className="btn-create-account">Crear cuenta</button>
                </form>
                <div className="border col-3">
                    <img src={laborum} alt="img laborum" className="img-laborum" />
                </div>
                <div className="container-background">
                    <img src={yellowBox} alt='img Box' className="YellowBox" />
                </div>
            </div >
        )
    };
};
export default Registry;