import React from 'react';
import '@styles/ProductInfo.scss';

import addCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
    return (
        <div>
            &lt;&gt;
            <img src="https://c.tenor.com/gdreZ3-KnnAAAAAd/attack-on-titan-the-rumbling.gif" alt="bike" />
            <div classname="ProductInfo">
                <p>$35,00</p>
                <p>Bike</p>
                <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                <button classname="primary-button add-to-cart-button">
                    <img src={addCart} alt="add to cart" />
                    Add to cart
                </button>
            </div>
        </div>

    );
}

export default ProductInfo;