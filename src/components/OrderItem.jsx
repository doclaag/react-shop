import React from 'react';
import '@styles/OrderItem.scss';

import close from '@icons/icon_close.png';

const OrderItem = () => {
    return (
        <div className="OrderItem">
            <figure>
                <img src="https://c.tenor.com/gdreZ3-KnnAAAAAd/attack-on-titan-the-rumbling.gif" alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src={close} alt="close" />
        </div>
    );
}

export default OrderItem;