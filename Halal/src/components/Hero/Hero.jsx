import React from 'react'
import ecomImage from '../../images/ecom.jpg'
import { Link } from 'react-router-dom'

export const Hero = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before sold out
                            <br className="hidden lg:inline-block" />Buy for your own
                        </h1>
                        <p className="mb-8 leading-relaxed">Halal is an e-commerce site, that offers you to buy products online at a perfect rate with the exact product—timely delivery with delivery charge-free over Bangladesh. So let's check out before Stock out </p>
                        <div className="flex justify-center">
                            <Link to='/products' className="inline-flex text-white bg-lime-500 border-0 py-1 px-20 focus:outline-none hover:bg-lime-600 rounded text-lg">Buy Now</Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded mb-20" alt="hero" src={ecomImage} />
                    </div>
                </div>
            </section>
        </>
    )
}
