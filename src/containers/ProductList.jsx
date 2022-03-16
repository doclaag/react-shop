import React from 'react';


const API = process.env.API;

import useGetProducts from '@hooks/useGetProducts';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';


const ProductList = () => {

    const products = useGetProducts(API);

    return (
        <section className="main-container">
            <div className="ProductList">
                {products.map(product => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
        </section>
    );
}

export default ProductList;