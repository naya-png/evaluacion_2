import React from 'react';

    function Principal() {
        return ( 
            <div style={{ paddingTop: '70px' }}>
                <div className='row mt-3'>
                   <div className='col-lg-6 '>
                        <h2>Energía solar accesible y confiable para tu hogar o pyme</h2>
                        <p>Dimensiona tu sistema, conoce el costo estimado y solicita asesoría en minutos. La DEMO te guía con valores referenciales
                        </p>
                        <a href="#demo" 
                            className="btn btn-primary mt-2"
                            style={{
                            backgroundColor: '#237ea1ff',
                            color:'white',
                            border:'none',
                            }}>
                            Ver DEMO
                        </a>
                    </div>
                </div>   
            </div>

            
        );
    }

export default Principal;