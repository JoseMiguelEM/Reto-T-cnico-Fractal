// PopupDeleteOrder.js
import React from 'react';
import { FaTimes, FaTrash } from 'react-icons/fa';
import { deleteOrder } from '../../../utils/orderFunctions';

export default function PopupDeleteOrder({ order, onClose, onConfirmDelete }) {
    const handleDelete = () => {
        deleteOrder(order.id).then(() => {
            onConfirmDelete(order.id);
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Are you sure you want to delete order #{order.id}?</h2>
                    <button onClick={onClose}>&times;</button>
                </div>
                <p className="mb-4">
                    This is a permanent action and you wouldn't be able to go back later.
                </p>
                <div className="flex justify-between">
                    <button
                        onClick={onClose}
                        className="border border-[#EF5350] text-[#EF5350] px-4 py-2 rounded flex items-center"
                    >
                        <FaTimes className="mr-2" /> Cancel
                    </button>
                    <button
                        onClick={handleDelete}
                        className="bg-[#1585D7] text-white px-4 py-2 rounded flex items-center"
                    >
                        <FaTrash className="mr-2" /> Yes, Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
