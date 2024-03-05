import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand>
          <img src="https://www.cide.es/storage/2023/12/nova-web-logo-CIDE.png" alt="" />
          CideTravel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href = "/">Inicio</Nav.Link>
            <Nav.Link href = "/intereses">Puntos de interes</Nav.Link>
            <Nav.Link href = "/restaurants">Restaurantes</Nav.Link>
            <Nav.Link href = "/hotels">Hoteles</Nav.Link>
            <Nav.Link href = "/activitats">Activitades</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;