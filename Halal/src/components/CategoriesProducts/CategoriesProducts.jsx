import React, { useState, useEffect } from 'react'
import { Categories } from '../Categories/Categories';
import { ProductsCard } from '../ProductsCard/ProductsCard';
import { useParams } from 'react-router-dom';

export const CategoriesProducts = () => {
    const { name } = useParams();
    const [products, SetProducts] = useState([]);
    console.log(name, products);
    console.log(`https://fakestoreapi.com/products/${name}`);
    useEffect(() => {
        const productsApi = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
            const data = await response.json();
            SetProducts(data);
        }
        productsApi();
    }, [products])

    return (
        <>
            <Categories />
            <ProductsCard products={products} />
        </>
    )
}