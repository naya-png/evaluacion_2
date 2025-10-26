import logo from './logo.svg';
import './App.css';
import NavbarPrincipal from './components/navbar';
import PresentacionInicial from './components/presentacion';
import ServiciosOfrecido from './components/servicios';

function App() {

  return (
    <div className='container'>
      <NavbarPrincipal/>
      <PresentacionInicial/>
      <ServiciosOfrecido/>
    </div>
  );
 
}

export default App;
