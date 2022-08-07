import React from 'react'
import img from './fondoMande.jpg'
import './loginUsuario.css';
// eslint-disable-next-line
import { Link } from "react-router-dom";

const loginTrabajador = () => {
  return (
    <div className='loginU'>
            <div className='loginContainer'>
                <div className='containerLogin'>
                    <h1>Iniciar Sesion Usuario</h1>
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Correo electronico</label>
                                <input type='email' className="form-control-LU" placeholder="Email, ej: viafara.juan@correounivalle.edu.co" required/>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="age">Numero de telefono</label>
                                <input type='number' className="form-control-LU" id="inputId" placeholder="Telefono, ej: 3124567890" required />
                            </div>
                        </div>





                        <div className="continuarReg">
                                <button type="submit" className="btnRT-terminar">Terminar registro</button>
                        </div>

                    </form >
                </div >
                <div className='imgRegConteiner-RT'>
                    <img src={img} alt='img' className='imgreg' />
                </div>
            </div>
        </div>
  )
}

export default loginTrabajador
