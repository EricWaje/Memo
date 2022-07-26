import React from 'react';

const listaDeNombres = [
    {
        id: 1,
        name: 'Juan',
        age: 20,
    },
    {
        id: 2,
        name: 'Pedro',
        age: 30,
    },
    {
        id: 3,
        name: 'Maria',
        age: 40,
    },
    {
        id: 4,
        name: 'Eric',
        age: 50,
    },
    {
        id: 5,
        name: 'Ivan',
        age: 20,
    },
    {
        id: 6,
        name: 'Carlos',
        age: 20,
    },
    {
        id: 7,
        name: 'Gaston',
        age: 30,
    },
    {
        id: 8,
        name: 'Leandro',
        age: 40,
    },
];

const List = ({ nombre }) => {
    const getNombreFiltrado = (query, nombres) => {
        if (!query) {
            return nombres;
        }
        return nombres.filter((nombre) =>
            nombre.name.toLowerCase().includes(query)
        );
    };

    const nombreFiltrado = getNombreFiltrado(nombre, listaDeNombres);

    return (
        <div style={{ width: '100%' }}>
            {nombreFiltrado.map((nombre) => (
                <div
                    style={{
                        margin: '10px',
                        padding: '10px',
                        border: '3px solid grey',
                        borderRadius: '8px',
                    }}
                    key={nombre.id}
                >
                    <h2>{nombre.name}</h2>
                    <p>Edad: {nombre.age}</p>
                </div>
            ))}
        </div>
    );
};

export default List;
