import React, { useState } from 'react';
import CardList from './CardList';

const items = [
    {
        id: 1,
        name: 'Producto 1',
        price: 100,
    },
    {
        id: 2,
        name: 'Producto 2',
        price: 200,
    },
    {
        id: 3,
        name: 'Producto 3',
        price: 300,
    },
    {
        id: 4,
        name: 'Producto 4',
        price: 400,
    },
];

const CardContainer = () => {
    //console.log('CardContainer: Me renderizo');
    // eslint-disable-next-line
    const [products, setProducts] = useState(items);
    const [count, setCount] = useState(0);
    return (
        <div style={{ width: '100%' }}>
            <h1 onClick={() => setCount(count + 1)}>Count: {count}</h1>
            <CardList items={products} />
        </div>
    );
};

export default CardContainer;
