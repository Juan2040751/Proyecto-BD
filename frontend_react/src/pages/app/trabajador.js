import React, { Component } from 'react'

import axios from 'axios';
import '../registros/regTrabajador.css';


class trabajador extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_labor: '',
            
            labor_tipoUnidad: '',
            labor_precio: '',
        }

    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    submitHandler = async e => {
        e.preventDefault();
        const formdata = new FormData();
        const {id_labor, labor_tipoUnidad, labor_precio }=this.state
        await axios.get('http://localhost:3000/trabajador/' + window.location.pathname.substring(12)).then((response) => {
            formdata.append("id_trabajador", response.data.id_trabajador);
        });
        formdata.append("id_labor", id_labor);
        formdata.append("labor_tipoUnidad", labor_tipoUnidad);
        formdata.append("labor_precio", labor_precio);
        
        axios.post('http://localhost:3000/trabajo/',formdata)
    }
   
    render() {
        const { id_labor, labor_tipoUnidad, labor_precio } = this.state

            return (
                <div className='RegistroT'>
                    <div className='RegistroConteiner'>
                        <div className='containerReg-RT'>
                            <h1>Inscripcion trabajo</h1>
                            <form onSubmit={this.submitHandler}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Labor</label>
                                        <select className="form-control-RT" value={id_labor} name={'id_labor'} onChange={this.changeHandler} required>
                                            <option value=""></option>
                                            <option value="1">Plomero</option>
                                            <option value="2">Cerrajero</option>
                                            <option value="3">Profesor</option>
                                            <option value="4">Paseador de perros</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Tipo de Unidad</label>
                                        <select className="form-control-RT" value={labor_tipoUnidad} name={'labor_tipoUnidad'} onChange={this.changeHandler} required>
                                            <option value=""></option>
                                            <option value="Por hora">Por hora</option>
                                            <option value="Por labor">Por labor</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Precio</label>
                                        <input type='number' name={'labor_precio'} value={labor_precio} onChange={this.changeHandler} accept="image/*" className="form-control-RT" required />
                                    </div>
                                </div>






                                <div className="continuarReg">
                                    <button type="submit" className="btnRT-terminar">Terminar registro</button>
                                </div>

                            </form >
                        </div >
                    </div>
                </div>
            )
        }

}

export default trabajador