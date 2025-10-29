import { Row, Col, Card } from 'react-bootstrap';

function ServiciosOfrecido() {
  const servicios = [
    {
      titulo: "Estudio energético",
      texto: "Análisis de consumo y propuesta ajustada a tu perfil.",
      imagen: "assets/logoha/bolt.png",
    },
    {
      titulo: "Instalación certificada",
      texto: "Ejecutada por personal acreditado y normativa vigente.",
      imagen: "assets/logoha/instalacion.png",
    },
    {
      titulo: "Monitoreo",
      texto: "Seguimiento de rendimiento y alertas preventivas.",
      imagen: "assets/logoha/monitoreo.png",
    },
    {
      titulo: "Mantención",
      texto: "Planes periódicos para extender la vida útil del sistema.",
      imagen: "assets/logoha/mantencion.png",
    },
  ];

  return (
    <section id="servicios" className="servicios-section">
      <Row className="servicios-header align-items-center">
        <Col xs={12} md={6}>
          <h2 className="servicios-titulo">Servicios</h2>
        </Col>
        <Col xs={12} md={6}>
          <p className="servicios-descripcion">
            Estudio energético, instalación certificada, monitoreo y mantención.
          </p>
        </Col>
      </Row>

      <Row xs={2} md={4} className="g-3 servicios-grid">
        {servicios.map((servicio, idx) => (
          <Col key={idx}>
            <Card className="servicio-card">
              <Card.Img
                variant="top"
                src={servicio.imagen}
                className="servicio-imagen"
              />
              <Card.Body className="servicio-body">
                <Card.Title className="servicio-titulo">
                  {servicio.titulo}
                </Card.Title>
                <Card.Text className="servicio-texto">
                  {servicio.texto}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default ServiciosOfrecido;
