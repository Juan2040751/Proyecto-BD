import React, { Component } from 'react'
import img from './fondoMande.jpg'
// eslint-disable-next-line
import axios from 'axios';
import './regUsuario.css';


class regUsuario extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fotoFSP: null,
            telefono_usuario: '',
            correo_usuario: '',
            usuario_medioPago: ''
        }

    }
    changeHandlerImg = async e => {
        this.setState({ fotoFSP: e.target.files[0] })
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = async e => {
        const { telefono_usuario, correo_usuario, usuario_medioPago, fotoFSP } = this.state
        e.preventDefault();
        const formdata = new FormData();
        const formdataFSP = new FormData();
        formdataFSP.append("file", fotoFSP)
        formdataFSP.append("upload_preset", "proyectodb")
        await axios.post('https://api.cloudinary.com/v1_1/proyectobdjuan/image/upload', formdataFSP).then((response) => {
            formdata.append("usuario_direcFotoSerPub", response.data.secure_url)
        });

        await axios.get('http://localhost:3000/persona/' + window.location.pathname.substring(18)).then((response) => {
            formdata.append("id_persona", response.data.id_persona);
        });
        
        
        
        formdata.append("usuario_medioPago", usuario_medioPago);
        formdata.append("correo_usuario", correo_usuario);
        formdata.append("itelefono_usuario", telefono_usuario);
        axios.post('http://localhost:3000/usuario/', formdata);
    }
    render() {
        const { telefono_usuario, correo_usuario, usuario_medioPago } = this.state


        return (
            <div className='RegistroU'>
                <div className='RegistroConteiner'>

                    <div className='containerReg'>
                        <h1>Registro Usuario</h1>
                        <form onSubmit={this.submitHandler}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Foto de servicios publicos</label>
                                    <input type='file' name={'fotoFSP'} onChange={this.changeHandlerImg} accept="image/*" className="form-control-RU" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Telefono</label>
                                    <input type='number' min="1000" max="9999999999" className="form-control-RU" value={telefono_usuario} name={'telefono_usuario'} onChange={this.changeHandler} placeholder="Telefono, ej: 3124567890" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="age">Medio de Pago</label>
                                    <select className="form-control-RU" value={usuario_medioPago} name={'usuario_medioPago'} onChange={this.changeHandler} required>
                                        <option value=""></option>
                                        <option value="Débito">Débito</option>
                                        <option value="Crédito">Crédito</option>
                                    </select>
                                </div>
                            </div>



                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="age">Email</label>
                                    <input type='email' className="form-control-RU" value={correo_usuario} name={'correo_usuario'} onChange={this.changeHandler} placeholder="Email, ej: viafara.juan@correounivalle.edu.co" required />
                                </div>
                            </div>



                            <div className="continuarReg">
                                <button type="submit" className="btnRU-terminar">Terminar registro</button>
                            </div>

                        </form >
                    </div >
                    <div className='imgRegConteiner-RU'>
                        <img src={img} alt='img' className='imgreg' />
                    </div>
                </div>
            </div>
        )
    }
}

export default regUsuario
