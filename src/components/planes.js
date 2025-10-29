import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';


const planes = [
  {
    nombre: 'Básico',
    potencia: '3–5 kW',
    badgeColor: '#C6F3F1',
    bullets: ['Estudio energético', 'Instalación estándar', 'Monitoreo básico'],
  },
  {
    nombre: 'Optimizado',
    potencia: '10–15 kW',
    badgeColor: '#B3E8E6',
    bullets: ['Estudio avanzado', 'Instalación optimizada', 'Monitoreo avanzado'],
  },
  {
    nombre: 'Autónomo',
    potencia: 'Híbrido + baterías',
    badgeColor: '#A0E0DD',
    bullets: ['Diseño off-grid', 'Almacenamiento', 'Soporte preferente'],
  },
];

function Planes() {
  return (
    <section id="planes" className="py-5">
      <Container>
        <h2 className="fw-bold text-start mb-0">Planes</h2>
        <Row className="justify-content-center g-3">
        <p className="text-muted mb-0" style={{ color: '#797979ff', textAlign: 'right' }} >
          Elige el plan que se ajusta a tu proyecto.
        </p>
          {planes.map((plan, idx) => (
            <Col key={idx} xs={12} md={6} lg={4}>
              <Card className="plan-card text-center h-100 shadow-sm border-0">
                <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                  <Badge
                    bg="bluelight"
                    style={{
                      backgroundColor: plan.badgeColor,
                      color: '#061111ff',
                      padding: '0.6rem 1.2rem',
                      borderRadius: '50px',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      marginBottom: '1rem',
                    }}
                  >
                    {plan.nombre}
                  </Badge>

                  <div className="mb-3">
                    <h4 className="text-primary fw-semibold">{plan.potencia}</h4>
                  </div>

                  <ul className="list-unstyled mb-4 text-muted">
                    {plan.bullets.map((item, i) => (
                      <li key={i} className="mb-1">{item}</li>
                    ))}
                  </ul>

                  <Button
                    variant="primary"
                    href="#contacto"
                    className="rounded-pill px-4 py-2"
                  >
                    Solicitar evaluación
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}

export default Planes;