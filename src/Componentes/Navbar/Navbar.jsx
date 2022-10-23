import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Logo from '../../assets/img/LEGAL_VERSE_MATI-06.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">
          <img
            src={Logo}
            alt="10"
            width="35"
            height="45"
            className="navbar-brand"
          />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">



            <li className="nav-item">
              <a className="nav-link dropdown-toggle">
                Servicio-Dropdown
              </a>  
            </li>


            <li className="nav-item">
              <Link to="Nosotros" className="nav-link">
                Nosotros
              </Link>
            </li>
          </ul>


          <div className="d-flex">
            <Link to="/Paginas/Login"  className="btn btn-secondary btn-sm">Iniciar Sesion</Link>
            <Link to="Paginas/Create" className="btn btn-outline-success">Registrarse</Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
