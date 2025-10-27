import { Row, Col, Card } from 'react-bootstrap';



function SolucionesOfrecidas() {
 const servicios = [
    {
      titulo: "Hogar 3-5 kW",
      texto: "Balance ideal entre costo y ahorro mensual.",
      imagen: "assets/logoha/hogar.png",
    },
    {
      titulo: "PyME 10-20 kW",
      texto: "Para operación diurna con buena irradiacion.",
      imagen: "assets/logoha/PyME.png",
    },
    {
      titulo: "Off-grid con baterías",
      texto: "Autonomía en zonas sin red eléctrica.",
      imagen: "assets/logoha/OFF.png",
    }
  ];

  return (
    <Row className="my-4 align-items-center">
      <Col xs={12} md={6}>
        <h2 className="fw-bold text-start">Soluciones</h2>
      </Col>
      <Col xs={12} md={6}> 
        <p style={{ color: '#797979ff', textAlign: 'right' }}>
          Kits residenciales, PyME, off-grid con baterias e hibridos.
        </p>
      </Col >  
        <Row xs={2} md={3} className="g-4">
          {servicios.map((servicio, idx) => (
            <Col key={idx}>
              <Card >
                <Card.Img variant="top d-flex align-items-center" 
                src={servicio.imagen} 
                style={{
                width: '70px',
                height: '70px',
                objectFit:'scale-down',
                margin : 'initial'
                }}
                />
                <Card.Body style={{ padding: '0.25rem' }}>
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
  );
}

export default SolucionesOfrecidas;
