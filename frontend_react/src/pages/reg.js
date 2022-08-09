import React, { Component } from 'react';
import img from '../fondoMande.jpg';
import { Redirect } from '../App';
import axios from 'axios';
import './reg.css';

class reg extends Component {
  constructor(props) {
    super(props)

    this.state = {
      persona_nombre: '',
      persona_edad: '',
      persona_identificacion: '',
      direccion_carrera:'',
      direccion_calle:'',
      direccion_barrio:'',
      direccion_ciudad:'',
      role:''
    }
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://127.0.0.1:3000/persona/', this.state)
      .then(response => {
        console.log(response.data)
        this.props.Redirect(response.data)
      })
      .catch(error => {
        console.log(error)
        console.log('no mi rey')
      })
  }
  render() {
    const { persona_nombre, persona_edad, persona_identificacion, direccion_barrio,direccion_calle,direccion_carrera,direccion_ciudad} = this.state
    return (
      <div className='Registro'>
        <div className='RegistroConteiner'>
          <div className='containerReg'>
            <h1>Registro</h1>
            <form onSubmit={this.submitHandler}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="persona_nombre">Nombre Completo</label>
                  <input type="text" value={persona_nombre} name={'persona_nombre'} className="form-control" onChange={this.changeHandler} placeholder="Name, ej: Juan Lozano" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="persona_edad">Edad</label>
                  <input type="number" min="0" className="form-control" name={'persona_edad'} value={persona_edad} onChange={this.changeHandler} placeholder="Edad, ej: 17" required />
                </div>

                <div className="form-group">
                  <label htmlFor="persona_identificacion">Numero de Cedula</label>
                  <input type='number' className="form-control" name={'persona_identificacion'} value={persona_identificacion} onChange={this.changeHandler} placeholder="Cedula, ej: 1234567" required />
                </div>

              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="barrio">Barrio</label>
                  <input type="text" className="form-control" name={'direccion_barrio'} value={direccion_barrio} onChange={this.changeHandler} placeholder="Barrio, ej: Lido" required />
                </div>

                <div className="form-group">
                  <label htmlFor="calle">Calle</label>
                  <input type="text" className="form-control" name={'direccion_calle'} value={direccion_calle} onChange={this.changeHandler}  placeholder="Calle, ej: 5ta" required/>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="carrera">Carrera</label>
                  <input type="text" className="form-control" name={'direccion_carrera'} value={direccion_carrera} onChange={this.changeHandler} placeholder="Carrera, ej: 15" required/>
                </div>

                <div className="form-group">
                  <label htmlFor="cuidad">Ciudad</label>
                  <input type="text" className="form-control" name={'direccion_ciudad'} value={direccion_ciudad} onChange={this.changeHandler} placeholder="Calle, ej: Cali" required/>
                </div>
              </div>

              <div className="continuarReg">
                Escoge tu rol
                <div className="btnReg">
                <button  onClick={() => this.setState({ role: 'trabajador' })} type="submit" className="btnRegsSG">Trabajador</button>
                <button  onClick={() => this.setState({ role: 'usuario' })} type="submit" className="btnRegsLG">Usuario</button>
                  

                </div>
              </div>

            </form >
          </div >
          <div className='imgRegConteiner'>
            <img src={img} alt='img' className='imgreg' />
          </div>
        </div>

      </div>
    )
  }

}


export default reg
