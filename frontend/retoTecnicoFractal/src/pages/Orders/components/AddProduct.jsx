import React, { useState, useEffect } from 'react';
import { FaTimes, FaSave, FaSearch } from 'react-icons/fa';
import { useProducts } from '../../../hooks/useProducts';


export default function AddProduct({ onAdd, onClose }) {
    const {products}=useProducts();
    const productsAvailable = products;
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredProducts([]);
        } else {
            setFilteredProducts(
                productsAvailable.filter(product =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm]);

    const handleAdd = () => {
        if (selectedProduct) {
            onAdd({ ...selectedProduct, quantity });
            onClose();
        }
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setSearchTerm('');
        setFilteredProducts([]);
    };

    const isSaveDisabled = !selectedProduct;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Add a Product</h2>
                    <button onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>
                <div className="mb-4 relative">
                    <label className="block text-gray-700">Search Product</label>
                    <input
                        type="text"
                        value={selectedProduct ? selectedProduct.name : searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setSelectedProduct(null);
                        }}
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                    />
                    <FaSearch className="absolute top-10 right-4 text-gray-500" />
                    {filteredProducts.length > 0 && (
                        <div className="absolute top-16 left-0 right-0 border border-gray-400 rounded bg-white z-10">
                            {filteredProducts.map(product => (
                                <div
                                    key={product.id}
                                    onClick={() => handleProductClick(product)}
                                    className={`px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center ${
                                        selectedProduct && selectedProduct.id === product.id ? 'bg-gray-200' : ''
                                    }`}
                                >
                                    <label className="cursor-pointer">
                                        {product.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Quantity</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                        min="1"
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={onClose}
                        className="border border-[#EF5350] text-[#EF5350] bg-white py-2 px-4 rounded-lg flex items-center focus:outline-none"
                    >
                        <FaTimes className="mr-2" /> Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleAdd}
                        className={`bg-[#1585D7] text-white px-4 py-2 rounded flex items-center ${isSaveDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSaveDisabled}
                    >
                        <FaSave className="mr-2" /> Save
                    </button>
                </div>
            </div>
        </div>
    );
}
