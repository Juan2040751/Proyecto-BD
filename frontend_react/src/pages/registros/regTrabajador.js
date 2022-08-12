import React, { Component } from 'react'
import img from './fondoMande.jpg'
import axios from 'axios';
import './regTrabajador.css';


class regTrabajador extends Component {
    constructor(props) {
        super(props)

        this.state = {
            trabajador_direcFotoPer: null,
            trabajador_direcFotoCed: null,
            urlFP: '',
            urlFC: '',
            id_persona: 0
        }

    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.files[0] })
    }



    submitHandler =async e => {
        const { trabajador_direcFotoCed, trabajador_direcFotoPer } = this.state
        e.preventDefault();
        const formdata = new FormData();
        const formdataFP = new FormData();
        formdataFP.append("file", trabajador_direcFotoPer)
        formdataFP.append("upload_preset", "proyectodb")
        await axios.post('https://api.cloudinary.com/v1_1/proyectobdjuan/image/upload', formdataFP).then((response) => {
            formdata.append("trabajador_direcFotoPer", response.data.secure_url)
        });
        
        const formdataFC = new FormData();
        formdataFC.append("file", trabajador_direcFotoCed);
        formdataFC.append("upload_preset", "proyectodb");
        await axios.post('https://api.cloudinary.com/v1_1/proyectobdjuan/image/upload', formdataFC).then((response) => {
            formdata.append("trabajador_direcFotoCed", response.data.secure_url);
        });
        
        await axios.get('http://localhost:3000/persona/' + window.location.pathname.substring(21)).then((response) => {
            formdata.append("id_persona",response.data.id_persona);
        });
        
        axios.post('http://localhost:3000/trabajador/', formdata);
        const dir = "http://localhost:5000/trabajador/"+ window.location.pathname.substring(21);
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
                                    <input type='file' name={'trabajador_direcFotoCed'} onChange={this.changeHandler} accept="image/*" className="form-control-RT" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="age">Foto de perfil</label>
                                    <input type='file' name={'trabajador_direcFotoPer'} onChange={this.changeHandler} accept="image/*" className="form-control-RT" required />
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
