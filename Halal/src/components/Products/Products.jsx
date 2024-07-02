import React, { useState, useEffect } from 'react'
import { FeaturesCard } from '../FeaturesCard/FeaturesCard'
import { ProductsCard } from '../ProductsCard/ProductsCard'
import { StatisticCard } from '../StatisticCard/StatisticCard'
import { Categories } from '../Categories/Categories'

export const Products = () => {
    const [products, SetProducts] = useState([]);
    useEffect(() => {
        const productsApi = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json();
            SetProducts(data);
        }
        productsApi();
    }, [])

    return (
        <>
            <Categories />
            <ProductsCard products={products} />
        </>
    )
}
