import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

const faqs = [
  { q: '¿Qué garantías ofrecen?', a: 'Garantía de 12 meses sobre instalación y garantías de fábrica del fabricante en paneles e inversores.' },
  { q: '¿Cada cuánto se realiza mantención?', a: 'Recomendamos mantención anual para optimizar rendimiento.' },
  { q: '¿Ofrecen monitoreo?', a: 'Sí, ofrecemos monitoreo remoto con plataforma web y app.' },
  { q: '¿Cuánto demora la instalación?', a: 'Depende del tamaño del sistema; en promedio 1–5 días hábiles desde la aprobación técnica.' },
];

function FAQ() {
  return (
    <section id="faq" className="py-4">
      <Container>
        <h2 className="fw-bold text-start">Preguntas frecuentes</h2>
        <p className="faq-descripcion">
          Cuéntanos tu proyecto y agenda una asesoría.
        </p>
        <Accordion>
          {faqs.map((f, idx) => (
            <Accordion.Item eventKey={String(idx)} key={idx}>
              <Accordion.Header>{f.q}</Accordion.Header>
              <Accordion.Body>{f.a}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}

export default FAQ;