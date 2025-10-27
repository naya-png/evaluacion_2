import logo from './logo.svg';
import './App.css';
import NavbarPrincipal from './components/navbar';
import PresentacionInicial from './components/presentacion';
import ServiciosOfrecido from './components/servicios';
import SolucionesOfrecidas from './components/soluciones';
import CalculadoraSolar from './components/CalculadoraIntegral';
function App() {

  return (
    <div className='container'>
      <NavbarPrincipal/>
      <PresentacionInicial/>
      <ServiciosOfrecido/>
      <SolucionesOfrecidas/>
      <CalculadoraSolar/>
    </div>
  );
 
}

export default App;
