import React, { useState } from 'react';
import { FaTimes, FaSave } from 'react-icons/fa';

export default function PopupAddProduct({ onClose }) {
    const [name, setName] = useState('');
    const [unitPrice, setUnitPrice] = useState('');

    const handleSave = () => {
        // Lógica para guardar el producto
        onClose();
    };

    const isSaveDisabled = name.trim().length === 0 || unitPrice <= 0;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
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
                    <label className="block text-gray-700">Unit Price ($$)</label>
                    <input
                        type="number"
                        className="mt-1 p-2 border w-full"
                        value={unitPrice}
                        onChange={(e) => setUnitPrice(e.target.value)}
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
            </div>
        </div>
    );
}
