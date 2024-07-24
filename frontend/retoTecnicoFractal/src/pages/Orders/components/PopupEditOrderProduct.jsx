import React, { useState } from 'react';
import { FaTimes, FaSave } from 'react-icons/fa';

export default function PopupEditOrderProduct({ product, onSave, onClose }) {
    const [quantity, setQuantity] = useState(product.quantity);

    const handleSave = () => {
        onSave(product.id, quantity);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Edit product #{product.id}</h2>
                    <button onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Product Name</label>
                    <input
                        type="text"
                        value={product.name}
                        readOnly
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Quantity</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={onClose}
                        className="border border-[#EF5350] text-[#EF5350] bg-white py-2 px-4 rounded-lg mr-2 focus:outline-none flex items-center"
                    >
                        <FaTimes className="mr-2" /> Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleSave}
                        className="bg-[#1585D7] text-white py-2 px-4 rounded-lg focus:outline-none flex items-center"
                    >
                        <FaSave className="mr-2" /> Save
                    </button>
                </div>
            </div>
        </div>
    );
}
