import React, { useState } from 'react';
import Encabezado from './Encabezado';
import ComponenteHijo from './ComponenteHijo';
import './estilos.css';
import CardContainer from './components/CardContainer';
import Buscador from './components/Buscador';

const App = () => {
    const [contador1, cambiarContador1] = useState(1);
    const [contador2, cambiarContador2] = useState(1);
    const [contador3, cambiarContador3] = useState(1);

    //useCallback -> memorizar funciones
    const aumentar1 = () => {
        cambiarContador1(contador1 + 1);
    };

    const aumentar2 = () => {
        cambiarContador2(contador2 + 1);
    };

    const aumentar3 = () => {
        cambiarContador3(contador3 + 1);
    };

    return (
        <>
            <div className="ejemmplo-counter">
                <div className="grid">
                    <Encabezado />
                    <ComponenteHijo
                        texto="Contador 1"
                        cuenta={contador1}
                        sumarUno={aumentar1}
                    />
                    <ComponenteHijo
                        texto="Contador 2"
                        cuenta={contador2}
                        sumarUno={aumentar2}
                    />
                    <ComponenteHijo
                        texto="Contador 3"
                        cuenta={contador3}
                        sumarUno={aumentar3}
                    />
                </div>
            </div>
            <div className="ejemplo-container">
                <CardContainer />
            </div>
            <div className="ejemplo-buscador">
                <Buscador />
            </div>
            <div className="footer"></div>
        </>
    );
};

export default App;
