import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarPrincipal() {
  return (
    <Navbar expand="lg" fixed='top' className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#helioandes">
          <span style={{display:'flex', alignItems: 'center', gap: '10px'}}>
            <img src="/assets/logoha/logo.png" 
              alt= "Logo Helio Andes" 
              style={{
                width: "60px", 
                height: "60px"}}/> 
              <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#1a2a3a'}}>
                HelioAndes
              </span>
          </span>
        </Navbar.Brand>

        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#soluciones">Soluciones</Nav.Link>
            <Nav.Link href="#demo">DEMO</Nav.Link>
            <Nav.Link href="#planes">Planes</Nav.Link>
            <Nav.Link href="#testimonios">Testimonios</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );

}

export default NavbarPrincipal;