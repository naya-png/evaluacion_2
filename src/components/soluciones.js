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
    <section id="soluciones" className="py-1">
      <Row className="my-4 align-items-center">
        <Col xs={12} md={6}>
          <h2 className="fw-bold text-start">Soluciones</h2>
        </Col>
        <Col xs={12} md={6}>
          <p className="soluciones-descripcion">
            Kits residenciales, PyME, off-grid con baterias e hibridos.
          </p>
        </Col >
        <Row xs={2} md={3} className="g-3">
          {servicios.map((servicio, idx) => (
            <Col key={idx}>
              <Card className="solucion-card">
                <Card.Img
                  variant="top"
                  className="solucion-img"
                  src={servicio.imagen}
                />
                <Card.Body className="solucion-body">
                  <Card.Title className="solucion-titulo">
                    {servicio.titulo}
                  </Card.Title>
                  <Card.Text className="solucion-texto">
                    {servicio.texto}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
    </section>
  );
}

export default SolucionesOfrecidas;