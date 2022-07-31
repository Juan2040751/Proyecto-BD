import React from 'react'
import img from './fondoMande.jpg'
// eslint-disable-next-line
import { Link } from "react-router-dom";
import './regUsuario.css';
const regUsuario = () => {
    return (
        <div className='RegistroU'>
            <div className='RegistroConteiner'>

                <div className='containerReg'>
                    <h1>Registro Usuario</h1>
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Telefono</label>
                                <input type='number' min="1000" max="9999999999" className="form-control-RU" placeholder="Telefono, ej: 3124567890" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="age">Medio de Pago</label>
                                <input type="text" className="form-control-RU" placeholder="Elija una opcion" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Foto de servicios publicos</label>
                                <input type='file' accept="image/*" className="form-control-RU" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="age">Email</label>
                                <input type='email' className="form-control-RU" placeholder="Email, ej: viafara.juan@correounivalle.edu.co" required />
                            </div>
                        </div>



                        <div className="continuarReg">
                            <button type="submit" className="btnRU-terminar">Terminar registro</button>
                        </div>

                    </form >
                </div >
                <div className='imgRegConteiner-RU'>
                    <img src={img} alt='img' className='imgreg' />
                </div>
            </div>
        </div>
    )
}

export default regUsuario
