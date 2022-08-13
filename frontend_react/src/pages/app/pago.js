import React, { useState } from 'react'

const Pago = () => {
    const [monto, setMonto]= useState(0)
    const [calificacion, setCalificacion] = useState('')

    const submitHandler = async e => {
        e.preventDefault();

    }
    return (
        <div className='RegistroT'>
            <div className='RegistroConteiner'>
                <div className='containerReg-RT'>
                    <h1>Realizar pago</h1>
                    <form onSubmit={submitHandler}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Monto a pagar</label>
                                <input type='number' value={monto} min={1} name={'pago_montoPago'}  onChange={(e)=>setMonto(e.target.value)}  className="form-control-RU" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Calificacion</label>
                                <select className="form-control-RU" value={calificacion} name={'calificacion_servicio'} onChange={(e)=>setCalificacion(e.target.value)} required>
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

export default Pago
