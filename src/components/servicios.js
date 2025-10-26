import { Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faSun, faTools, faChartLine } from '@fortawesome/free-solid-svg-icons';



function ServiciosOfrecido() {
  const iconos = {
    "fa-bolt": faBolt,
    "fa-sun": faSun,
    "fa-tools": faTools,
    "fa-chart-line": faChartLine
  };

  const servicios = [
    {
      titulo: "Estudio energético",
      texto: "Análisis de consumo y propuesta ajustada a tu perfil",
      imagen: "assets/logoha/bolt.png",
      icono: "fa-bolt"
    },
    {
      titulo: "Instalación solar",
      texto: "Paneles solares adaptados a tu espacio",
      imagen: "img/solar.png",
      icono: "fa-sun"
    },
    {
      titulo: "Mantenimiento eléctrico",
      texto: "Revisión y reparación de instalaciones",
      imagen: "img/mantenimiento.png",
      icono: "fa-tools"
    },
    {
      titulo: "Auditoría energética",
      texto: "Informe detallado para optimizar tu consumo",
      imagen: "img/auditoria.png",
      icono: "fa-chart-line"
    }
  ];

  return (
    <Row xs={1} md={2} className="g-4">
      {servicios.map((servicio, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" 
            src={servicio.imagen} 
            style={{width: '80 px',
            height: '80px',
            objectFit:'contain',
            margin : 'o auto'
            }}
             />
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={iconos[servicio.icono]} size='xs'/> {servicio.titulo}
              </Card.Title>
              <Card.Text>{servicio.texto}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ServiciosOfrecido;
