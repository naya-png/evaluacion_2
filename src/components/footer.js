import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  const año = new Date().getFullYear();

  return (
    <footer className="footer-full text-white py-4 mt-5">
      <Container fluid className="text-center">
        <p className="mb-1 fw-semibold">
          HelioAndes Energía — Todos los derechos reservados © {año}
        </p>
        <small>
          <a
            href="#"
            className="text-white text-decoration-underline me-3"
          >
            Política de privacidad
          </a>
          <a href="#" className="text-white text-decoration-underline">
            Términos y condiciones
          </a>
        </small>
      </Container>
    </footer>
  );
}
