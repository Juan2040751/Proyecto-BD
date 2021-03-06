import React from 'react';
import img from '../fondoMande.jpg'
import './reg.css';
const reg = () => {
  return (
    <div className='Registro'>
      <div className='RegistroConteiner'>

        <div className='containerReg'>
          <h1>Registro</h1>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" className="form-control" placeholder="Name, ej: Juan Lozano" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="age">Edad</label>
                <input type="number" className="form-control" id="inputAge" placeholder="Edad, ej: 17" required />
              </div>

              <div className="form-group">
                <label htmlFor="id">Numero de Cedula</label>
                <input type='number' className="form-control" id="inputId" placeholder="Cedula, ej: 1234567" required />
              </div>

            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="barrio">Barrio</label>
                <input type="text" className="form-control" id="inputBarrio" placeholder="Barrio, ej: Lido" required />
              </div>

              <div className="form-group">
                <label htmlFor="calle">Calle</label>
                <input type="text" className="form-control" id="inputCalle" placeholder="Calle, ej: 5ta" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="carrera">Carrera</label>
                <input type="text" className="form-control" id="inputCarrera" placeholder="Carrera, ej: 15" required />
              </div>

              <div className="form-group">
                <label htmlFor="cuidad">Cuidad</label>
                <input type="text" className="form-control" id="inputCuidad" placeholder="Calle, ej: Cali" required />
              </div>

            </div>

            <div className="continuarReg">
              Escoge tu rol
              <div className="btnReg">
                <button type="submit" className="btnRegsSG">Trabajador</button>
                <button type="submit" className="btnRegsLG">Usuario</button>
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

export default reg
