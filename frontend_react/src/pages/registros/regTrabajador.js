import React, { Component } from 'react'
import img from './fondoMande.jpg'

import axios from 'axios';
import './regTrabajador.css';

class regTrabajador extends Component {
    constructor(props) {
        super(props)

        this.state = {
            trabajador_direcFotoPer: null,
            trabajador_direcFotoCed: null
        }
        
    }
    changeHandler = e => {
        this.setState({ [e.target.name]:  e.target.files[0] })
    }
    


    submitHandler = e => {
        const {trabajador_direcFotoCed,trabajador_direcFotoPer} = this.state
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('trabajador_direcFotoPer', trabajador_direcFotoPer)
        formdata.append('trabajador_direcFotoCed', trabajador_direcFotoCed)
        axios.post('http://127.0.0.1:3000/persona/', formdata);
        const dir = "http://localhost:5000/registro/";
        window.location = dir;
    }
    render() {
        return (
            <div className='RegistroT'>
                <div className='RegistroConteiner'>

                    <div className='containerReg-RT'>
                        <h1>Registro Trabajador</h1>
                        <form onSubmit={this.submitHandler}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Foto del documento de Identidad</label>
                                    <input type='file' name={'trabajador_direcFotoPer'} onChange={this.changeHandler} accept="image/*" className="form-control-RT" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="age">Foto de perfil</label>
                                    <input type='file'  name={'trabajador_direcFotoCed'} onChange={this.changeHandler} accept="image/*" className="form-control-RT"  required />
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

}

export default regTrabajador
