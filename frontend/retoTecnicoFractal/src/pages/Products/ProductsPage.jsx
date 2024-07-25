// ProductsPage.js
import React, { useState, useEffect } from 'react';
import ProductsTable from './components/ProductsTable';
import PopupAddProduct from './components/PopupAddProduct';
import { useProducts } from '../../hooks/useProducts.js';

export default function ProductsPage() {
    const [reload, setReload] = useState(false);
    const { products, setProducts } = useProducts(reload);
    const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);

    const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));

    const handleAddClick = () => {
        setIsAddPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsAddPopupOpen(false);
    };

    const handleSetProducts = (newProducts) => {
        const sortedNewProducts = [...newProducts].sort((a, b) => a.name.localeCompare(b.name));
        setProducts(sortedNewProducts);
    };

    return (
        <div className='px-8 py-4'>
            <div className="flex justify-between items-center mb-4">
                <div className="text-black w-full">
                    <div className="text-3xl font-black">My Products</div>
                    <div className="text-l">{sortedProducts.length} registered products</div>
                </div>
                <div
                    onClick={handleAddClick}
                    className="text-white text-xl text-center rounded-lg cursor-pointer bg-[#1585D7] px-4 py-2"
                >
                    + New Product
                </div>
            </div>
            <ProductsTable products={sortedProducts} setProducts={handleSetProducts} setReload={setReload} reload={reload} />
            {isAddPopupOpen && <PopupAddProduct onClose={handleClosePopup} products={sortedProducts} setProducts={handleSetProducts} />}
        </div>
    );
}
