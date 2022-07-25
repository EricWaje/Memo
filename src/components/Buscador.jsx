import React, { useState } from 'react';
import Form from './Form';
//import Form from './Form';
import List from './List';

const Buscador = () => {
    const [nombre, setNombre] = useState('');

    const almacenarInput = (params) => {
        setNombre(params);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Form almacenarInput={almacenarInput} />
            <List nombre={nombre} />
        </div>
    );
};

export default Buscador;
