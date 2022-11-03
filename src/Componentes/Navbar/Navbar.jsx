/* import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/img/Captura-PhotoRoom 1.png";
import Dropdown from "react-bootstrap/Dropdown";


function navbar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="150"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <Dropdown.Menu>
                <NavDropdown.Item href="/Servicios/Gestion">
                  Gestión
                </NavDropdown.Item>
                <NavDropdown.Item href="/Servicios/Asistencia">
                  Asistencia
                </NavDropdown.Item>
                <NavDropdown.Item href="/Servicios/Creacion">
                  Creación
                </NavDropdown.Item>
                <NavDropdown.Item href="/Servicios/Ofertas">
                  Ofertas
                </NavDropdown.Item>
                <NavDropdown.Item href="/Servicios/Firma">
                  Firma digital
                </NavDropdown.Item>
                <NavDropdown.Item href="/Servicios/Revision">
                  Revisión
                </NavDropdown.Item>
              </Dropdown.Menu>
            </NavDropdown>
            <Nav.Link href="/Paginas/Nosotros">Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/Paginas/Login">Iniciar Sesión</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
*/
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink as BaseNavLink } from "react-router-dom";
import Logo from "../../assets/img/Captura-PhotoRoom 1.png";

function navbar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="150"
            height="35"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Servicios/Gestion">
                Gestión
              </NavDropdown.Item>
              <NavDropdown.Item href="/Servicios/Asistencia">
                {" "}
                Asistencias{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#/Servicios/Creacion">
                Creación
              </NavDropdown.Item>
              <NavDropdown.Item href="/Servicios/Firma">
                Firma digital
              </NavDropdown.Item>
              <NavDropdown.Item href="/Servicios/Ofertas">
                Ofertas
              </NavDropdown.Item>
              <NavDropdown.Item href="/Servicios/Revision">
                Revisión
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="/Paginas/Nosotros">Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Paginas/Login">Iniciar Sesión</Nav.Link>
            <Nav.Link href="/Paginas/Register">Registrase</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
