import React from 'react';
import "./ContainerForm.css"

const ContainerForm = () => {
    return (
        <div className="col-8 containerForm">
            <div className="containerButtons">
                <button className="col-2 btnColor">Atrás</button>
                <button className="col-2 btnColor">Guardar</button>
                <button className="col-2 btnColor">Siguiente</button>
            </div>
        </div>
    );
  };
  
  export default ContainerForm;