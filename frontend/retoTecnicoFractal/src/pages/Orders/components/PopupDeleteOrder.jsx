import React, { useState } from 'react';
import { FaTimes, FaTrash, FaCheck } from 'react-icons/fa';
import { deleteOrder } from '../../../utils/orderFunctions'; // Importar la función deleteOrder

export default function PopupDeleteOrder({ order, onClose }) {
    const [isDeleted, setIsDeleted] = useState(false);

    const handleDelete = () => {
        // Lógica para eliminar la orden
        console.log('Deleting order', order);
        deleteOrder(order.id);
        setIsDeleted(true);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                {!isDeleted ? (
                    <>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Are you sure you want to delete order #{order.ID}?</h2>
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
                    </>
                ) : (
                    <>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Order #{order.id} Deleted Successfully</h2>
                            <button onClick={onClose}>&times;</button>
                        </div>
                        <div className="flex justify-center">
                            <FaCheck className="text-black-500 text-4xl" />
                        </div>
                        <div className="flex justify-center mt-4">
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
