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
      texto : "Planes periódicos para estender la vida útil del sistema.",
      imagen: "assets/logoha/mantencion.png"
    }
  ];

  return (
    <section id="servicios" className="py-4">
    <Row className="my-4 align-items-center">
      <Col xs={12} md={6}>
        <h2 className="fw-bold text-start mb-0">Servicios</h2>
      </Col>
      <Col xs={12} md={6}> 
        <p className="text-muted mb-0" style={{ color: '#797979ff', textAlign: 'right' }} >
          Estudio energético, instalación certificada, monitoreo y mantención.
        </p>
      </Col >  
        <Row xs={2} md={4} className="g-3">
          {servicios.map((servicio, idx) => (
            <Col key={idx}>
              <Card style={{ padding: '0.2rem' }}>
                <Card.Img variant="top d-flex align-items-center" 
                src={servicio.imagen} 
                style={{
                width: '70px',
                height: '70px',
                objectFit:'scale-down',
                margin : 'initial'
                }}
                />
                <Card.Body style={{ padding: '0.1rem' }}>
                  <Card.Title style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>
                    {servicio.titulo}
                  </Card.Title>
                  <Card.Text style={{ color: '#999999ff', fontSize: '0.85rem', textAlign: 'left' }}>{servicio.texto}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>     
    </Row>  
  </section>
  );
}

export default ServiciosOfrecido;
