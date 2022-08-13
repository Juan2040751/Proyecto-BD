import React, { Component } from 'react'

import axios from 'axios';
import '../registros/regTrabajador.css';


class pago extends Component {
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
                            <h1>Realizar pago</h1>
                            <form onSubmit={this.submitHandler}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Monto a pagar</label>
                                        <input type='number' min={1} name={'pago_montoPago'}  onChange={this.changeHandler}  className="form-control-RU" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Calificacion</label>
                                        <select className="form-control-RU"  name={'calificacion_servicio'} onChange={this.changeHandler} required>
                                            <option value=""></option>
                                            <option value="Muy malo">Muy malo</option>
                                            <option value="Malo">Malo</option>
                                            <option value="Regular">Regular</option>
                                            <option value="Bueno">Bueno</option>
                                            <option value="Muy bueno">Muy bueno</option>
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

}

export default pago