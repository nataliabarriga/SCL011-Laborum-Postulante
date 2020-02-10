import React from 'react';

import './style/login.css'

class Login extends React.Component {
    render() {
        return (
            <div>
                <div className="container-form">
                    <input type="text" name="name" id="name" className="name" placeholder="Nombre" />
                    <input type="email" name="email" id="email" className="email" placeholder="Email" />
                    <input type="passwor" name="password" id="password" class="password" placeholder="Clave" />
                    <button>Registrarme</button>
                </div>
            </div>
        )
    }
}
export default Login;