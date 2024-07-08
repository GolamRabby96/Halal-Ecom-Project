import React, { useState, useEffect } from 'react'
import { Hero } from '../../components/Hero/Hero'
import { ProductsCard } from '../../components/ProductsCard/ProductsCard'
import { StatisticCard } from '../../components/StatisticCard/StatisticCard'
import { Footer } from '../../components/Footer/Footer'

export const Home = () => {
    const [products, SetProducts] = useState([]);
    useEffect(() => {
        const productsApi = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=8')
            const data = await response.json();
            SetProducts(data);
        }
        productsApi();
    }, [])

    return (
        <>
            <Hero />
            <div className="flex flex-col text-center w-full mb-20 shadow-lg pb-5">
                <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 className="sm:text-2xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
            </div>
            {
                products.length > 0 ? <ProductsCard products={products} /> : <div>Loding ...</div>
            }
            {/* <Categories /> */}
            <StatisticCard />
            <Footer />
        </>
    )
}

