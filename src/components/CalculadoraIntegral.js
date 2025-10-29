import React, { useState } from 'react';
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap';

const CalculadoraSolar = () => {
  const [formData, setFormData] = useState({
    potenciaPanel: '',
    cantidadPaneles: '',
    inversor: '',
    bateria: '',
    cantidadBaterias: '',
    estructura: '',
    instalacionBase: '',
    pesoEnvio: 0,
    tipoTecho: '',
    region: '',
    complejidad: '',
    subsidio: '',
    envio: '',
    garantia: '',
    planPago: '',
    tipoPie: '',
    valorPie: 0
  });

  const estiloNumero = {color: '#828a91ff'};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      potenciaPanel: '',
      cantidadPaneles: 0,
      inversor: '',
      bateria: '',
      cantidadBaterias: '',
      estructura: '',
      instalacionBase: '',
      pesoEnvio: 0,
      tipoTecho: '',
      region: '',
      complejidad: '',
      subsidio: '',
      envio: '',
      garantia: '',
      planPago: '',
      tipoPie: '',
      valorPie: 0
    });
  };

  return (
    <Container className="mt-4">
      <Row>
        {/* Formulario */}
        <Col md={6}>
          <Card >
            <Card.Body>
              <Card.Title className="fw-bold text-start mb-0">Formulario</Card.Title>
              <Form>
                <Row>
                  <Col className="fw-bold text-start mb-0"><Form.Group><Form.Label>Potencia del panel (W)</Form.Label><Form.Control type="number" name="potenciaPanel" value={formData.potenciaPanel} onChange={handleChange} style={estiloNumero} /></Form.Group></Col>
                  <Col className="fw-bold text-start mb-0"><Form.Group><Form.Label>Cantidad de paneles</Form.Label><Form.Control type="number" name="cantidadPaneles" value={formData.cantidadPaneles} onChange={handleChange} style={estiloNumero} /></Form.Group></Col>
                </Row>

                <Row className="mt-2">
                  <Col className="fw-bold text-start mb-0"><Form.Group><Form.Label>Inversor (precio)</Form.Label><Form.Control type="number" name="inversor" value={formData.inversor} onChange={handleChange} style={estiloNumero}/></Form.Group></Col>
                  <Col className="fw-bold text-start mb-0"><Form.Group><Form.Label>Batería (precio unidad)</Form.Label><Form.Control type="number" name="bateria" value={formData.bateria} onChange={handleChange} style={estiloNumero}/></Form.Group></Col>
                </Row>

                <Row className="mt-2">
                  <Col className="fw-bold text-start mb-0"><Form.Group><Form.Label>Cantidad baterías</Form.Label><Form.Control type="number" name="cantidadBaterias" value={formData.cantidadBaterias} onChange={handleChange} style={estiloNumero} /></Form.Group></Col>
                  <Col className="fw-bold text-start mb-0"><Form.Group><Form.Label>Estruct./cableado</Form.Label><Form.Control type="number" name="estructura" value={formData.estructura} onChange={handleChange} style={estiloNumero}/></Form.Group></Col>
                </Row>

                <Row className="mt-2">
                  <Col className="fw-bold text-start mb-0"><Form.Group><Form.Label>Instalación base</Form.Label><Form.Control type="number" name="instalacionBase" value={formData.instalacionBase} onChange={handleChange} style={estiloNumero}/></Form.Group></Col>
                  <Col className="fw-bold text-start mb-0"><Form.Group><Form.Label>Peso envío (kg)</Form.Label><Form.Control type="number" name="pesoEnvio" value={formData.pesoEnvio} onChange={handleChange} style={estiloNumero}/></Form.Group></Col>
                </Row>

                <Row className="mt-2">
                  <Col className="fw-bold text-start mb-0"><Form.Group><Form.Label>Tipo de techo</Form.Label><Form.Select name="tipoTecho" value={formData.tipoTecho} onChange={handleChange}><option>Teja/Asfalto (+5%)</option><option>Metal (+3%)</option></Form.Select></Form.Group></Col>
                  <Col className="fw-bold text-start mb-0"><Form.Group><Form.Label>Región</Form.Label><Form.Select name="region" value={formData.region} onChange={handleChange}><option>RM ($5.000)</option><option>Sur (+5%)</option></Form.Select></Form.Group></Col>
                </Row>

                <Row className="mt-2">
                  <Col className="fw-bold text-start mb-0"><Form.Group><Form.Label>Complejidad instalación</Form.Label><Form.Select name="complejidad" value={formData.complejidad} onChange={handleChange}><option>Baja (0%)</option><option>Media (+10%)</option><option>Alta (+20%)</option></Form.Select></Form.Group></Col>
                  <Col className="fw-bold text-start mb-0"><Form.Group><Form.Label>Subsidio</Form.Label><Form.Select name="subsidio" value={formData.subsidio} onChange={handleChange}><option>Sin subsidio (0%)</option><option>Con subsidio (-15%)</option></Form.Select></Form.Group></Col>
                </Row>

                <Row className="mt-2">
                  <Col className="fw-bold text-start mb-0"><Form.Group><Form.Label>Método de envío</Form.Label><Form.Select name="envio" value={formData.envio} onChange={handleChange}><option>Estándar (dt 100)</option><option>Express (+$10.000)</option></Form.Select></Form.Group></Col>
                  <Col className="fw-bold text-start mb-0"><Form.Group><Form.Label>Garantía</Form.Label><Form.Select name="garantia" value={formData.garantia} onChange={handleChange}><option>12 meses (+2%)</option><option>24 meses (+5%)</option></Form.Select></Form.Group></Col>
                </Row>

                <Row className="mt-2">
                  <Col className="fw-bold text-start mb-0"><Form.Group><Form.Label>Plan de pago</Form.Label><Form.Select name="planPago" value={formData.planPago} onChange={handleChange}><option>Contado (0%)</option><option>Financiado (+10%)</option></Form.Select></Form.Group></Col>
                  <Col className="fw-bold text-start mb-0"><Form.Group><Form.Label>Tipo de pie</Form.Label><Form.Select name="tipoPie" value={formData.tipoPie} onChange={handleChange}><option>Porcentaje</option><option>Valor fijo</option></Form.Select></Form.Group></Col>
                </Row>

                <Form.Group className="mt-2">
                  <Form.Label className="fw-bold text-start mb-0">Valor de pie</Form.Label>
                  <Form.Control type="number" name="valorPie" value={formData.valorPie} onChange={handleChange} style={{ color: '#879097ff' }} />
                  <Form.Text style={{ color: '#6c757d' }}>Si es porcentaje, 10 = 10%</Form.Text>
                </Form.Group>

                <div  className="btn mt-2 me-2">
                  <Button className="fw-bold text-start mb-0 border border-lightgray rounded me-2" variant="white" onClick={handleReset}>Reiniciar</Button>
                  <Button className="fw-bold text-start mb-0 border border-lightgray rounded " variant="white">Copiar resumen</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Resumen */}
        <Col md={6}>
          <Card>
            <Card.Body >
              <Card.Title className="fw-bold text-start mb-3">Resumen</Card.Title>
              {[
                ['Potencia estimada (kW)',    '-'],
                ['Subtotal equipos',          '-'],
                ['Recargo techo',            '$-'],
                ['Subsidio',                 '$-'],
                ['Istalación final',         '$-'],
                ['IVA  19%',                 '$-'],
                ['Envio',                    '$-'],
                ['Garantía',                 '$—'],
                ['Total antes de financiar', '$—'],
                ['Pie',                      '$—'],
                ['Interés total',            '$—'],
                ['Cuota',                    '$—'],
                ['Total final',              '$—']
                ].map(([label, value], idx) => (
                <Row key={idx} className="mb-2">
                <Col xs={7} className="fw-bold text-start">{label}</Col>
                <Col xs={5} className="text-end" style={{ color: '#6c757d' }}>{value}</Col>
                </Row>
                ))}
              <small className="text-muted d-block mt-3">Valores referenciales para el prototipo.</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CalculadoraSolar;