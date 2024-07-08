import React, { useState } from 'react'
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export const Cart = () => {
    const navigate = useNavigate();
    const [total, SetTotal] = useState(0);
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length <= 0) {
        return (
            <div className="flex justify-center">
                <div className='p-7 mt-10'>
                    <h3>Your cart is empty</h3>
                    <Link to="/products" className="p-200 font-bold">Contineu Shopping</Link>
                </div>
            </div>
        )
    }

    useEffect(() => {
        const total = cart.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
        }, 0)
        SetTotal(total);
    }, [cart]);

    const handleCartDecrement = (id) => {
        const updateCart = cart.map(item => {
            if (item.id === id) {
                if (item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    }
                }
            }
            return item;
        })
        localStorage.setItem('cart', JSON.stringify(updateCart));
        navigate('/cart');
    }
    const handleCartIncrement = (id) => {
        const updateCart = cart.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                }
            }
            return item;
        })
        localStorage.setItem('cart', JSON.stringify(updateCart));
        navigate('/cart');
    }

    const handleRemoveProduct = (id) => {
        const updateCart = cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(updateCart));
        navigate('/cart');
    }
    return (
        <div className='container mx-auto mt-10'>
            <div className='flex shadow-md my-10'>
                <div className="w-3/4 bg-white px-10 py-10">
                    <div className='flex justify-between border-b pb-8'>
                        <h1 className='font-semibold text-2xl'>Shopping Cart</h1>
                        <h2 className='font-semibold text-2xl'>{cart?.length} Items</h2>
                    </div>
                    <div className='flex mt-10 mb-5'>
                        <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>Product Details</h3>
                        <h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>Quanity</h3>
                        <h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>Price</h3>
                        <h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>Total</h3>
                    </div>
                    {
                        cart.map((cart) => {
                            return (
                                <div className='flex items-center hover:bg-gray-100 -mx-5 px-6 py-5'>
                                    <div className='flex w-2/5'>
                                        <div className='w-20'>
                                            <img className='h-24' src={cart.image} alt={cart.title} />
                                        </div>
                                        <div className='flex flex-col justify-between ml-4 flex-grow'>
                                            <span className='font-bold text-sm'>{cart.title}</span>
                                            <span className='text-red-500 text-xs'>{cart.category}</span>
                                            <span onClick={() => handleRemoveProduct(cart?.id)} href="#" className='font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer'>Remove</span>
                                        </div>
                                    </div>
                                    <div className='flex justify-center w-1/5'>
                                        {
                                            cart.quantity > 1 ? <CiCircleMinus onClick={() => handleCartDecrement(cart.id)} className='fill-current text-gray-600 w-5 cursor-pointer text-2xl hover:text-black' /> : <CiCircleMinus className='fill-current text-gray-100 w-5 cursor-pointer text-2xl' />
                                        }
                                        <input className='mx-2 border text-center w-8' type="text" value={cart.quantity} n disabled />
                                        <CiCirclePlus onClick={() => handleCartIncrement(cart.id)} className='fill-current text-gray-600 w-5 cursor-pointer text-2xl' />
                                    </div>
                                    <span className='text-center w-1/5 font-semibold text-sm'>${cart.price}</span>
                                    <span className='text-center w-1/5 font-semibold text-sm'>${(cart.price * cart.quantity).toFixed(2)}</span>
                                </div>
                            )
                        })
                    }
                    <Link to='/products'><span className='flex mt-10' ><IoArrowBack className='mt-1' /> <p className='ml-5'>Continue Shopping</p></span></Link>
                </div>
                <div id="summary" className='w-1/4 px-8 py-10'>
                    <h1 className='font-semibold text-2xl border-b pb-8'>Order Summary</h1>
                    <div className='flex justify-between mt-10 mb-5'>
                        <span className='font-semibold text-sm uppercase'>Item 3</span>
                        <span className='font-semibold text-sm'>${total.toFixed(2)}</span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase"> Shipping </label>
                        <select className='block p-2 text-gray-600 w-full text-sm'>
                            <option value="">Standard Shipping</option>
                        </select>
                    </div>
                    <div className='py-10'>
                        <label for="promo" className=' font-semibold inline-block mb-3 text-sm uppercase'>Promo Code</label>
                        <input type="text" id="promo" placeholder='Enter your code' className='p-2 text-sm w-full' />
                    </div>
                    <button className='bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 text-sm uppercase'>Apply</button>
                    <div className='border-t mt-8'>
                        <div className='flex font-semibold justify-between py-6 text-sm uppercase'>
                            <span>Total cost</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button className='bg-lime-500 font-semibold hover:bg-lime-600 py-3 text-sm text-white uppercase w-full'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
