import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <a className="navbar-brand" href="#">
            IMG
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <a className="nav-link" href="#">
                Servicio <span className="sr-only"></span>
              </a>
            </li>
            <li>
              <Link to="Nosotros">Nosotros</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="Paginas/Login">
            <button type="button" class="btn btn-primary">
              Iniciar Sesion
            </button>
          </Link>
          <Link to="Paginas/Create">
            <button type="button" class="btn btn-info">
              Registrarse
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
