import { Container, Nav, Navbar } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import './CartWidget.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          Clothier Shop
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Invierno</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Verano</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#alimentos">Ofertas</Nav.Link>
          <Nav.Link href="#contactos">Nosotros</Nav.Link>
          <Nav.Link href="#nosotros">Sucursales</Nav.Link>
        </Nav>
        <CartWidget></CartWidget>
      </Container>
    </Navbar>
  )
}

export default NavBar;
