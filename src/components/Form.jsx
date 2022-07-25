import React, { useState } from 'react';

const Form = ({ almacenarInput }) => {
    const [nombre, setNombre] = useState('');

    const handleSubmitForm = (e) => {
        e.preventDefault();
        almacenarInput(nombre);
    };

    return (
        <form onSubmit={handleSubmitForm}>
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
    );
};

export default Form;
