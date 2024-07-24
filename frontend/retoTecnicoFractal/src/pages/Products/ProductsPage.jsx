import React, { useState, useEffect } from 'react';
import ProductsTable from './components/ProductsTable';
import PopupAddProduct from './components/PopupAddProduct';

import { useProducts } from '../../hooks/useProducts.js';

export default function ProductsPage() {
    const [reload, setReload] = useState(false);
    const { products, setProducts } = useProducts(reload); // Asegúrate de que fetchProducts esté disponible en tu hook
    //const [prds, setProducts] = useState([]);
    const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
    const cantidadProductos = products.length;

    //useEffect(() => {
    //    setProducts(products);
    //}, [products, reload]);


    const handleAddClick = () => {
        setIsAddPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsAddPopupOpen(false);
    };

    return (
        <div className='px-8 py-4'>
            <div className="flex justify-between items-center mb-4">
                <div className="text-black w-full">
                    <div className="text-3xl font-black">My Products</div>
                    <div className="text-l">{cantidadProductos} registered products</div>
                </div>
                <div
                    onClick={handleAddClick}
                    className="text-white text-xl text-center rounded-lg cursor-pointer bg-[#1585D7] px-4 py-2"
                >
                    + New Product
                </div>
            </div>
            <ProductsTable products={products} setProducts={setProducts} setReload={setReload} reload={reload} />
            {isAddPopupOpen && <PopupAddProduct onClose={handleClosePopup} products={products} setProducts={setProducts} />}
        </div>
    );
}
