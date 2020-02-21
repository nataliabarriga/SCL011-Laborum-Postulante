import React from 'react';
import { auth } from '../ConfigFirebase/FirebaseInit';
import logo from '../img/logo.png';
import laborum from '../img/laborum.png';
import yellowBox from '../img/home-lab.jpg';
import './Login.css';

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
            <div className="container-principal">
                    <div className="container-lo">
                        <img src={logo} alt="logo laboratoria" className="logoLaboratoria" />
                    
                    <div className="container-title-login">
                        <h3 className="registrate">Registrate</h3>
                        <h5>Registro</h5>
                    
                    </div>

                    <form className="container-form" onSubmit={this.handleSubmit}>
                    <label className="title-label" >Correo</label>
                    <input onChange={this.handleChange} type="email" name="email" id="email" className="form-control" />
                    <label className="title-label">Contraseña</label>
                    <input onChange={this.handleChange} type="password" name="password" id="password" className="form-control" />

                    {/* <label className="title-label" >Institución</label>
                    <input onChange={this.handleChange} type="text" name="institution" id="institution" className="form-control" /> */}
                    <button onClick={this.handleClick} id="btnRegistry" className="btn-create-account-cuenta">Crear cuenta</button> 
                </form>
                </div>

                <div className="cont-Img-Egresada-registro">
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