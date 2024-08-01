import React from 'react';
import { useNavigate } from 'react-router-dom';
import pp from './pp.jpg';

export default function NavBar() {
    const navigate = useNavigate();

    const handleOrderClick = () => {
        navigate('/my-orders');
    };

    const handleProductsClick = () => {
        navigate('/products-list');
    };

    return (
        <div className='bg-[#1585D7] h-[80px] flex justify-between items-center px-5 space-x-2'>
            <div className='flex items-center gap-4 text-white flex-shrink-0 w-14vw'>
                <img src='/icono.jpg' alt="Icono" className='w-[60px] h-[60px] rounded-full' />
                <span className='hidden sm:inline whitespace-nowrap'>Fractal</span>
            </div>
            <div className='flex gap-8 sm:gap-32 text-white flex-grow justify-center'>
                <button onClick={handleOrderClick} className='whitespace-nowrap'>
                    My orders
                </button>
                <button onClick={handleProductsClick} className='whitespace-nowrap'>
                    List of products
                </button>
            </div>
            <div className='flex items-center flex-shrink-0 h-[60px] gap-2'>
                <div className='flex items-center gap-2 bg-white px-2 py-1 rounded sm:bg-transparent'>
                    <img src={pp} alt="Profile Picture" className='w-[60px] h-[60px] rounded-full' />
                    <div className='text-black truncate hidden sm:block'>
                        <span className='hidden sm:inline'>Jose Miguel Espinoza</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
