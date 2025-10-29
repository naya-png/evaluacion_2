import { Row, Col, Card } from 'react-bootstrap';



function Testimonios() {
 const servicios = [
    {
      titulo: "Alejandra, Ñuñoa",
      texto: "Instalación rápida y ahorro visible en la primera boleta.",
      imagen: "assets/logoha/profile2.png",
    },
    {
      titulo: "Diego, Valdivia",
      texto: "El monitoreo me permite proyectar bien los consumos.",
      imagen: "assets/logoha/profile.png",
    },
    {
      titulo: "Carla, Copiapó",
      texto: "Excelente asesoría y postventa. 100% recomendado.",
      imagen: "assets/logoha/profile2.png",
    }
  ];

  return (
    <section id="testimonios" className="py-3">
    <Row className="my-4 align-items-center">
      <Col xs={12} md={6}>
        <h2 className="fw-bold text-start">Testimonios</h2>
      </Col>
      <Col xs={12} md={6}> 
        <p style={{ color: '#797979ff', textAlign: 'right' }}>
          Clientes que ya confían en HelioAndes.
        </p>
      </Col >  
        <Row xs={2} md={3} className="g-3">
          {servicios.map((servicio, idx) => (
            <Col key={idx}>
              <Card >
                <Card.Img variant="top d-flex align-items-center" 
                src={servicio.imagen} 
                style={{
                width: '50px',
                height: '50px',
                objectFit:'scale-down',
                margin : 'initial'
                }}
                />
                <Card.Body style={{ padding: '0.60rem' }}>
                  <Card.Title style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                    {servicio.titulo}
                  </Card.Title>
                  <Card.Text style={{ color: '#999999ff', fontSize: '0.9rem', textAlign: 'left' }}>{servicio.texto}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      
    </Row>
    </section>  
  );
}

export default Testimonios;
