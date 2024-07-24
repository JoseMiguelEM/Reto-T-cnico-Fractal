import React from 'react'
import { useNavigate } from 'react-router-dom'
import pp from './pp.jpg'

export default function NavBar() {

    const navigate = useNavigate()

    const handleOrderClick = () => {
        navigate('/my-orders')
    }

    const handleProductsClick = () => {
        navigate('/products-list')
    }

    return (
        <div className='bg-[#1585D7] h-[80px] flex justify-between items-center px-5'>
            <div className='flex items-center gap-2 text-white'>
                <img src='/icono.jpg' alt="Icono" 
                className='w-[60px] h-[60px] rounded-full'/>
                <span>Fractal</span>
            </div>
            <div className='flex gap-32 text-white'>
                <button onClick={handleOrderClick}>
                    My orders
                </button>
                <button onClick={handleProductsClick}>
                    List of products
                </button>
            </div>
            <div className='bg-white px-2 py-1 rounded flex gap-2 items-center'>
                <img src={pp} alt="Profile Picture" 
                className='w-[60px] h-[60px] rounded-full'/>
                <div className='text-black'>Jose Miguel Espinoza</div>
            </div>
        </div>
    )
}
