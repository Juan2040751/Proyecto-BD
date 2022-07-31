import React from 'react';
import img from '../fondoMande.jpg'
import { Link } from "react-router-dom";
import { useState } from "react";
import './reg.css';
const reg = () => {
  const [persona_nombre, setName] = useState("");
  const [persona_edad, setAge] = useState("");
  const [persona_identificacion, setId] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          persona_nombre: persona_nombre,
          persona_edad: persona_edad,
          persona_identificacion: persona_identificacion,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setAge("");
        setId("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='Registro'>
      <div className='RegistroConteiner'>

        <div className='containerReg'>
          <h1>Registro</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" value={persona_nombre} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name, ej: Juan Lozano" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="age">Edad</label>
                <input type="number" min="0" value={persona_edad} onChange={(e) => setAge(e.target.value)} className="form-control" id="inputAge" placeholder="Edad, ej: 17" required />
              </div>

              <div className="form-group">
                <label htmlFor="id">Numero de Cedula</label>
                <input type='number' value={persona_identificacion} onChange={(e) => setId(e.target.value)} className="form-control" id="inputId" placeholder="Cedula, ej: 1234567" required />
              </div>

            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="barrio">Barrio</label>
                <input type="text" className="form-control" id="inputBarrio" placeholder="Barrio, ej: Lido" />
              </div>

              <div className="form-group">
                <label htmlFor="calle">Calle</label>
                <input type="text" className="form-control" id="inputCalle" placeholder="Calle, ej: 5ta"  />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="carrera">Carrera</label>
                <input type="text" className="form-control" id="inputCarrera" placeholder="Carrera, ej: 15" />
              </div>

              <div className="form-group">
                <label htmlFor="cuidad">Ciudad</label>
                <input type="text" className="form-control" id="inputCuidad" placeholder="Calle, ej: Cali"  />
              </div>
            </div>

            <div className="continuarReg">
              Escoge tu rol
              <div className="btnReg">
                <Link to="/registro/trabajador">
                  <button type="submit" className="btnRegsSG">Trabajador</button>
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

export default reg
