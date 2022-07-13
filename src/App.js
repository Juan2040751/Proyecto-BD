import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Registro from './pages/reg';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
          <Router>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/registro" element={<Registro/>}/>    
              </Routes>
          </Router>
      </div>
  );
}

export default App;
