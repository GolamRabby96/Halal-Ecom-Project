import React from 'react'
import { Link } from 'react-router-dom';

export const ProductsCard = ({ products = [] }) => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pb-10 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {
                            products.map((pro) => {
                                const { id, title, price, description, category, image } = pro;
                                return (
                                    <Link to={`product/${id}`} id={id} className="lg:w-1/4 md:w-1/2 w-full p-4 ">
                                        <div className='shadow-md m-2 p-2 h-full hover:shadow-gray-400 cursor-pointer'>
                                            <Link to={`/product/${id}`} className="block relative h-48 rounded overflow-hidden">
                                                <img alt={title} className="object-cover object-center w-full h-full p-2 sblock" src={image} />
                                            </Link>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                                                <h2 className="text-gray-900 title-font text-lg">{title}</h2>
                                                <p className="mt-1 font-bold">${price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
