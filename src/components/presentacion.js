import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { Image } from 'react-bootstrap';

    function Principal() {
        return ( 
         <Stack direction="horizontal" gap={1}> 
            <div className='mt-6' style={{ paddingTop: '150px' }}>
                <div className='row mb-2'>
                   <div className='col-lg-6 '>
                        <Badge className="mb-8" style={{ backgroundColor: '#44b1dbff', color: 'white' }}>Energia Solar</Badge>
                        <h2 className='mt-'>Energía solar accesible y confiable para tu hogar o pyme</h2>
                        <p class="text-justificado">Dimensiona tu sistema, conoce el costo estimado y solicita asesoría en minutos. La DEMO te guía con valores referenciales
                        </p>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <a href="#verdemo" 
                                className="btn btn-primary mt-2"
                                style={{
                                backgroundColor: '#1e85adff',
                                color:'white',
                                border:'none',
                                }}>
                                Ver DEMO
                             </a>
                            <a href="#demo" 
                                className="btn btn-light mt-2 me-2"
                                style={{
                                backgroundColor: '#ecfaffff',
                                color:'dark',
                                border:'none',
                                }}>
                                Descargar DEMO
                           </a>
                        </div>   
                    </div>
                    
                    <div className="col-lg-6 text-center">
                        <Image
                        src="/assets/logoha/energiasolar.png" //reemplazamos  por nuestra imagen 
                        alt="Panel solar"
                        fluid
                        rounded
                        style={{
                            maxWidth: "75%",
                            marginTop: "5px",
                            borderRadius: "5px",
                        }}
                        />
                    </div>
                </div>  
            </div>
         </Stack> 
        );
    }

export default Principal;