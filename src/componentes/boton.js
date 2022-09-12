import React from "react";

function Boton({ texto, esBotonDeClick, manejarClick }) {
  return (
      <button
          //si es boton de click asignamos boton-click, de lo contrario boton-reiniciar
      className={ esBotonDeClick ? "boton-click" : "boton-reiniciar" }
      onClick={manejarClick}>
        {texto}
      </button>
  )
}

export default Boton;