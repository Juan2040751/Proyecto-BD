import React from 'react'
import img from './fondoMande.jpg'
// eslint-disable-next-line
import { Link } from "react-router-dom";
import './regTrabajador.css';

const regTrabajador = () => {
    return (
        <div className='RegistroT'>
            <div className='RegistroConteiner'>

                <div className='containerReg-RT'>
                    <h1>Registro Trabajador</h1>
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Foto del documento de Identidad</label>
                                <input type='file' accept="image/*" className="form-control-RT" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="age">Foto de perfil</label>
                                <input type='file' name='Seleccionar' accept="image/*" className="form-control-RT" placeholder="Name, ej: Juan Lozano" required />
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

export default regTrabajador
