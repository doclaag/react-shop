import React from 'react';
import '@styles/ShoppingCartItem.scss';

const ShoppingCartItem = () => {
    return (
        <div className="ShoppingCartItem">
            <figure>
                <img src="https://c.tenor.com/gdreZ3-KnnAAAAAd/attack-on-titan-the-rumbling.gif" alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
        </div>
    );
}

export default ShoppingCartItem;