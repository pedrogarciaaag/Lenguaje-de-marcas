import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
      <Navbar.Brand className='mb-0 h1'>
          <img src="https://cdn.pixabay.com/photo/2016/12/04/23/20/cat-1882807_1280.png" alt="" width={"100px"} height={"100px"}/>
          Razas de gatos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to = "">Listado de razas</Nav.Link>
            <Nav.Link as={NavLink} to = "raza">Detalles de la raza</Nav.Link>           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;