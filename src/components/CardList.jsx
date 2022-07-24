//import React, { memo } from 'react';
import Card from './Card';

const CardList = ({ items }) => {
    //console.log('CardList: Me renderizo');
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gridGap: '10px',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {items.map((prod) => (
                <Card prod={prod} key={prod.id} />
            ))}
        </div>
    );
};

//export default memo(CardList);
export default CardList;
