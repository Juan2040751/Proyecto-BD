import React from 'react'
import img from './fondoMande.jpg'
import './loginTrabajador.css';
// eslint-disable-next-line
import { Link } from "react-router-dom";

const loginTrabajador = () => {
  return (
    <div className='loginT'>
            <div className='loginContainer'>

                <div className='containerLogin'>
                    <h1>Iniciar Sesion Trabajador</h1>
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" className="form-control-LT" placeholder="Name, ej: Juan Lozano" required/>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="age">Numero de Cedula</label>
                                <input type='number' className="form-control-LT" id="inputId" placeholder="Cedula, ej: 1234567" required />
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
