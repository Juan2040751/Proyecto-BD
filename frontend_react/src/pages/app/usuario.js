import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Usuario = () => {
    var id_labor= '';
    let datos=[];
    
    const changeHandler = async e => {
        id_labor=e.target.value
        //window.location.pathname.substring(9)
        await axios.get('http://localhost:3000/trabajo/' + id_labor).then((response) => {
            datos=response.data
        });
        console.log(datos)
    }
    
    return (
        <div className='RegistroT'>
            <div className='RegistroConteiner'>
                <div className='containerReg-RT'>
                    <h1>Servicio requerido</h1>
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Labor</label>
                                <select className="form-control-RT" onChange={changeHandler} name={'id_labor'} required>
                                    <option value=""></option>
                                    <option value="1">Plomero</option>
                                    <option value="2">Cerrajero</option>
                                    <option value="3">Profesor</option>
                                    <option value="4">Paseador de perros</option>
                                </select>
                            </div>
                        </div>


                        <div className="continuarReg">
                            <button type="submit" className="btnRT-terminar">Pagar</button>
                        </div>

                    </form >
                </div >
            </div>
        </div>
    )
}

export default Usuario
