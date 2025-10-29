import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { Image } from 'react-bootstrap';

function Principal() {
  return (
    <Stack direction="horizontal" gap={1}>
      <div className="presentacion-section">
        <div className="row mt-3">
          <div className="col-lg-6">
            <Badge className="presentacion-badge">Energía Solar</Badge>

            <h2 className="presentacion-title">
              Energía solar accesible y confiable para tu hogar o pyme
            </h2>

            <p className="presentacion-text text-justificado">
              Dimensiona tu sistema, conoce el costo estimado y solicita asesoría en minutos. 
              La DEMO te guía con valores referenciales.
            </p>

            <div className="presentacion-buttons">
              <a href="#verdemo" className="btn presentacion-btn-primary">
                Ver DEMO
              </a>
              <a href="#demo" className="btn presentacion-btn-secondary">
                Descargar DEMO
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <Image
              src="/assets/logoha/energiasolar.png"
              alt="Panel solar"
              fluid
              rounded
              className="presentacion-img"
            />
          </div>
        </div>
      </div>
    </Stack>
  );
}

export default Principal;
