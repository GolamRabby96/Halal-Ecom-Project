import React from 'react'

export const Cart = () => {
    return (
        <div className='container mx-auto mt-10'>
            <div className='flex shadow-md my-10'>
                <div className="w-3/4 bg-white px-10 py-10">
                    <div className='flex justify-between border-b pb-8'>
                        <h1 className='font-semibold text-2xl'>Shopping Cart</h1>
                        <h2 className='font-semibold text-2xl'>3 Items</h2>
                    </div>
                    <div className='flex mt-10 mb-5'>
                        <h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5'>Product Details</h3>
                        <h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>Quanity</h3>
                        <h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>Price</h3>
                        <h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>Total</h3>
                    </div>
                    <div className='flex items-center hover:bg-gray-100 -mx-5 px-6 py-5'>
                        <div className='flex w-2/5'>
                            <div className='w-20'>
                                <img className='h-24' src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' alt='cart product' />
                            </div>
                            <div className='flex flex-col justify-between ml-4 flex-grow'>
                                <span className='font-bold text-sm'>Ipone 6s</span>
                                <span className='text-red-500 text-xs'>Apple</span>
                                <a href="#" className='font-semibold hover:text-red-500 text-gray-500 text-xs'>Remove</a>
                            </div>
                        </div>
                        <div className='flex justify-center w-1/5'>
                            <input className='mx-2 border text-center w-8' type="text" value={1} />
                        </div>
                        <span>$400</span>
                        <span>$400</span>

                    </div>
                </div>
            </div>
        </div>
    )
}
