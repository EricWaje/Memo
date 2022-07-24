import React, { useState } from 'react';
//import Form from './Form';
import List from './List';

const Buscador = () => {
    const [nombre, setNombre] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //setNombre(prop);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre..."
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                />
                <button className="buscar">Buscar</button>
                <button className="all" onClick={() => setNombre('')}>
                    Todos
                </button>
            </form>
            <List nombre={nombre} />
        </div>
    );
};

export default Buscador;
