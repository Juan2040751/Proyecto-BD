import React from 'react'
import './login.css';
// eslint-disable-next-line
import { Link } from "react-router-dom";

const login = () => {
    return (
        <div className='login'>
            <div className='login-container'>
                <div className="titleLogin">Escoja su rol
                    <div>
                        <Link to="/iniciarSeccion/trabajador">
                            <button className="bot-loginT">Trabajador</button>
                        </Link>
                        <Link to="http://localhost:3000/iniciarSeccion/usuario">
                            <button className="bot-loginU">Usuario</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login
