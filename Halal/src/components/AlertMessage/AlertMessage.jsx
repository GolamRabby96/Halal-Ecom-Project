import React from 'react'

export const AlertMessage = ({ message }) => {
    console.log(message)
    return (
        <div className='bg-indigo-500 text-center text-white font-semibold font-mono transition-property: all transition-duration: 150ms'>{message}</div>
    )
}
