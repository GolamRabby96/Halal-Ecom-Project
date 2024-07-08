import React from 'react'
import { Link } from 'react-router-dom'

export const FeaturesCard = ({ categories = [] }) => {
    console.log(categories)
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">Halal E-commarase</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Your online trusted shop</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            categories.map((categories) => (<div className="p-4 md:w-1/4">
                                <Link to={`/products/${categories}`} className="flex rounded-lg h-full bg-gray-100 p-2 flex-col">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-4 inline-flex items-center justify-center rounded-full bg-lime-500 text-white flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                            </svg>
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">{categories}</h2>
                                    </div>
                                </Link>
                            </div>))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
