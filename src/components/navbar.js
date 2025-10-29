import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarPrincipal() {
  return (
    <section id="inicio" className="navbar-section">
      <Navbar expand="lg" fixed="top" className="navbar-principal">
        <Container>
          <Navbar.Brand href="#helioandes" className="navbar-brand-custom">
            <img
              src="/assets/logoha/logo.png"
              alt="Logo Helio Andes"
              className="navbar-logo"
            />
            <span className="navbar-text-brand">HelioAndes</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-links">
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
    </section>
  );
}

export default NavbarPrincipal;
