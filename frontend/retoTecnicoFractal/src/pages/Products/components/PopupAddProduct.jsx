import React, { useState } from 'react';
import { FaTimes, FaSave, FaCopy } from 'react-icons/fa';
import { createProduct } from '../../../utils/productsFunctions';

export default function PopupAddProduct({ onClose, products, setProducts }) {
    const [name, setName] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [isAdded, setIsAdded] = useState(false);
    const [productId, setProductId] = useState('');

    const handleSave = async () => {
        // Lógica para guardar el producto
        const product = {
            name: name,
            unitPrice: parseFloat(unitPrice), // Convertir unitPrice a número
            active: true
        };
        const resp = await createProduct(product);
        product.id = resp.id;
        setProductId(product.id); // Simular ID asignado
        setProducts([...products, product]);
        console.log('Product added:', products);
        setIsAdded(true);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(productId);
        alert('Product ID copied to clipboard');
    };

    const isSaveDisabled = name.trim().length === 0 || unitPrice <= 0;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                {!isAdded ? (
                    <>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Add product</h2>
                            <button onClick={onClose}>&times;</button>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                className="mt-1 p-2 border w-full"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Unit Price ($)</label>
                            <input
                                type="number"
                                min="1"
                                className="mt-1 p-2 border w-full"
                                value={unitPrice}
                                onChange={(e) => setUnitPrice(Math.max(1, parseFloat(e.target.value)))}
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                onClick={onClose}
                                className="border border-[#EF5350] text-[#EF5350] px-4 py-2 rounded flex items-center"
                            >
                                <FaTimes className="mr-2" /> Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className={`bg-[#1585D7] text-white px-4 py-2 rounded flex items-center ${isSaveDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={isSaveDisabled}
                            >
                                <FaSave className="mr-2" /> Save
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Product successfully added!</h2>
                            <button onClick={onClose}>&times;</button>
                        </div>
                        <p className="mb-4 text-gray-700">ID assigned to the product</p>
                        <div className="flex items-center justify-between mb-4">
                            <input
                                type="text"
                                className="border p-2 w-full text-center"
                                value={productId}
                                readOnly
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={onClose}
                                className="bg-[#1585D7] text-white px-4 py-2 rounded flex items-center"
                            >
                                Close
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
