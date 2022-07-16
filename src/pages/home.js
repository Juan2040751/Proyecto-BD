import { Link } from "react-router-dom";
import './Home.css';
function Home() {

  return (

    <div className="Home">
      <div className="title">Bienvenido a <span className="titulo">Mande</span>
        <div>
          <Link to="/registro">
            <button className="bot-reg">Registrarse</button>
          </Link>
          <Link to="/iniciarSeccion">
          <button className="bot-login">Iniciar Sesión</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
