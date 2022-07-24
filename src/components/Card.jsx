import React from 'react';

const Card = ({ prod }) => {
    //console.log('Card: Me renderizo');
    return (
        <div
            style={{
                border: '3px solid black',
                borderRadius: '8px',
                margin: '10px',
                padding: '10px',
            }}
        >
            <h1>Card</h1>
            <p>{prod.name}</p>
            <p>{prod.price}</p>
        </div>
    );
};

export default Card;
