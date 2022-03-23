import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/MyOrder.scss';
import flecha from '@icons/flechita.svg';

const MyOrder = () => {

    const { state } = useContext(AppContext);

    const totalAmount = () => {
        const reducer = (accumalator, currentValue) => accumalator + currentValue.price;

        const amount = state.cart.reduce(reducer, 0);

        return amount;
    };

    return (
        <aside className="MyOrder">
            <div className="title-container">
                <img src={flecha} alt="arrow" />
                <p className="title">My order</p>
            </div>
            <div className="my-order-content">
                {state.cart.map((product, index) => (
                    <OrderItem
                        indexValue={index}
                        key={`orderItem-${product.id}`}
                        product={product}
                    />
                ))}
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$ {totalAmount()}</p>
                </div>
                <button className="primary-button">
                    Checkout
                </button>
            </div>
        </aside>
    );
}

export default MyOrder;