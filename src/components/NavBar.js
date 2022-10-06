import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import './CartWidget.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Clothier Shop
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/categorias/invierno'>Invierno</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/categorias/verano'>Verano</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to='/ofertas'>Ofertas</Nav.Link>
          <Nav.Link as={Link} to='/nosotros'>Nosotros</Nav.Link>
          <Nav.Link as={Link} to='/sucursales'>Sucursales</Nav.Link>
        </Nav>
        <CartWidget></CartWidget>
      </Container>
    </Navbar>
  )
}

export default NavBar;
