import logo from './logo.svg';
import './App.css';
import NavbarPrincipal from './components/navbar';
import PresentacionInicial from './components/presentacion';
import ServiciosOfrecido from './components/servicios';
import SolucionesOfrecidas from './components/soluciones';
import Planes from './components/planes';
import Testimonios from './components/testimonios';
import FAQ from './components/FAQ';
import Contacto from './components/contacto';
import Footer from './components/footer';
import CalculadoraSolar from './components/CalculadoraIntegral';

function App() {

  return (
    <div className='container'>
      <NavbarPrincipal/>
      <PresentacionInicial/>
      <ServiciosOfrecido/>
      <SolucionesOfrecidas/>
      <CalculadoraSolar/>
      <Planes/>
      <Testimonios/>
      <FAQ/>
      <Contacto/>
      <Footer/>
    </div>
  );
 
}

export default App;
