import React, { useState } from 'react'
import { useEffect } from 'react';
import { FeaturesCard } from '../FeaturesCard/FeaturesCard';

export const Categories = () => {
    const [categories, SetCategories] = useState([]);
    useEffect(() => {
        const categoriesApi = async () => {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const data = await response.json();
            SetCategories(data);
        }
        categoriesApi();
    }, [])
    return (
        <FeaturesCard categories={categories} />
    )
}
