import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// eslint-disable-next-line
import Home from './pages/home';
// eslint-disable-next-line
import Registro from './pages/reg';
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
