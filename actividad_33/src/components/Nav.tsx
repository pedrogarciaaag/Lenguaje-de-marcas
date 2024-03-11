import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light" expand="lg" >
      <Container>
        <Navbar.Brand className='mb-0 h1'>
          <img src="https://www.cide.es/storage/2023/12/nova-web-logo-CIDE.png" alt="" />
          CideTravel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to = "">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to = "intereses">Puntos de interes</Nav.Link>
            <Nav.Link as={NavLink} to = "restaurants">Restaurantes</Nav.Link>
            <Nav.Link as={NavLink} to = "hotels">Hoteles</Nav.Link>
            <Nav.Link as={NavLink} to = "activitats">Activitades</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;