import React, { Component } from 'react';
import img from '../fondoMande.jpg';
import { Link } from "react-router-dom";
import axios from 'axios';
import './reg.css';

class reg extends Component {
  constructor(props) {
    super(props)

    this.state = {
      persona_nombre: '',
      persona_edad: '',
      persona_identificacion: ''
    }
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://127.0.0.1:3000/persona', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const { persona_nombre, persona_edad, persona_identificacion } = this.state
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
                  <input type="text" className="form-control" id="inputBarrio" placeholder="Barrio, ej: Lido" />
                </div>

                <div className="form-group">
                  <label htmlFor="calle">Calle</label>
                  <input type="text" className="form-control" id="inputCalle" placeholder="Calle, ej: 5ta" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="carrera">Carrera</label>
                  <input type="text" className="form-control" id="inputCarrera" placeholder="Carrera, ej: 15" />
                </div>

                <div className="form-group">
                  <label htmlFor="cuidad">Ciudad</label>
                  <input type="text" className="form-control" id="inputCuidad" placeholder="Calle, ej: Cali" />
                </div>
              </div>

              <div className="continuarReg">
                Escoge tu rol
                <div className="btnReg">
                <button type="submit" className="btnRegsSG">Trabajador</button>
                  <Link type='submit' to="/registro/usuario">
                    
                  </Link>
                  <Link to="/registro/usuario">
                    <button type="submit" className="btnRegsLG">Usuario</button>
                  </Link>

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
