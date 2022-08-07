import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Registro from './pages/reg'
import RegistroTrabajador from './pages/registros/regTrabajador'
import RegistroUsuario from './pages/registros/regUsuario'
import IniciarSeccion from './pages/login'
import LoginTrabajador from './pages/inicios/loginTrabajador';
import LoginUsuario from './pages/inicios/loginUsuario'

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/registro" element={<Registro/>}/>    
                    <Route path="/registro/trabajador" element={<RegistroTrabajador/>}/>
                    <Route path="/registro/usuario" element={<RegistroUsuario/>}/>
                    <Route path="/iniciarSeccion" element={<IniciarSeccion/>}/>
                    <Route path="/iniciarSeccion/trabajador" element={<LoginTrabajador/>}/>
                    <Route path="/iniciarSeccion/usuario" element={<LoginUsuario/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App
