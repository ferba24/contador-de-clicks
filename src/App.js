import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.svg'
import Boton from "./componentes/boton";

function App() {

  const manejarClick = () => {
    console.log('test')
  }
  const reiniciarContador = () => {
    console.log('Reiniciar')
  }
  return (
    <div className="App">
      <div className="freecamp-logo-contenedor">
        <img
            className="freecodecamp-logo"
            src={freeCodeCampLogo}
            alt="logo de freecodecamp"/>
      </div>
      <div className='contenedor-principal'>
        <Boton
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick()}
          />
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador()}
          />
      </div>
    </div>
  );
}

export default App;
