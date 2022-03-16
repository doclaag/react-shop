import React, { useState } from 'react';
import '@styles/ProductItem.scss';

import addToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {

    const [cart, setCart] = useState([]);

    const handleClick = () => {
        setCart([]);
    }

    return (
        <div className="ProductItem">
            <img src="https://c.tenor.com/8-0wRNnhEg8AAAAd/eren-titan.gif" alt="" />
            <div className="product-info">
                <div>
                    <p>$120,00</p>
                    <p>The Rumbling</p>
                </div>
                <figure onClick={handleClick}>
                    <img src={addToCart} alt="" />
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;