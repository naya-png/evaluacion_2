import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

function Contacto() {
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí solo simulamos envío; en producción conectar a API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ nombre: '', correo: '', mensaje: '' });
  };

  const handleLimpiar = () => {
    setForm({ nombre: '', correo: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="py-3">
      <Container>
        <Row className="my-4 align-items-center">
          <Col xs={12} md={6}>
            <h2 className="fw-bold text-start">Contacto</h2>
          </Col>
          <Col xs={12} md={6}>
            <p style={{ color: '#797979ff', textAlign: 'right' }}>
              Cuéntanos tu proyecto y agenda una asesoría.
            </p>
          </Col >
          <Col md={6}>
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  name="nombre"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="correo">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  name="correo"
                  type="email"
                  required
                  value={form.correo}
                  onChange={handleChange}
                  placeholder="tu@ejemplo.com"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="mensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="mensaje"
                  required
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </Form.Group>

              <Button
                type="submit"
                variant="primary"
                className="px-4 py-2 rounded-pill me-3"
                style={{
                  backgroundColor: '#074f57',
                  color: 'white',
                  border: 'none',
                }}
              >Enviar
              </Button>

              <Button
                type="button"
                variant="outline-secondary"
                className="px-4 py-2 rounded-pill"
                onClick={handleLimpiar}
              >
                Limpiar
              </Button>
            </Form>


            {submitted && <Alert variant="success" className="mt-3">Mensaje enviado (simulado).</Alert>}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contacto;