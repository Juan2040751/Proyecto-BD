import React from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from './pages/home'
import Registro from './pages/reg'
import RegistroTrabajador from './pages/registros/regTrabajador'
import RegistroUsuario from './pages/registros/regUsuario'
import IniciarSeccion from './pages/login'
import LoginTrabajador from './pages/inicios/loginTrabajador'
import LoginUsuario from './pages/inicios/loginUsuario'
import Trabajador from './pages/app/trabajador'
import Usuario from './pages/inicios/loginUsuario'
function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/registro" element={<Registro/>}/>    
                    <Route path="/registro/trabajador/:cc"  element={<RegistroTrabajador/>} />
                    <Route path="/registro/usuario/:cc" element={<RegistroUsuario/>}/>
                    <Route path="/iniciarSeccion" element={<IniciarSeccion/>}/>
                    <Route path="/iniciarSeccion/trabajador" element={<LoginTrabajador/>}/>
                    <Route path="/iniciarSeccion/usuario" element={<LoginUsuario/>}/>
                    <Route path="/trabajador/:cc" element={<Trabajador/>}/>
                    <Route path="/usuario" element={<LoginUsuario/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App
