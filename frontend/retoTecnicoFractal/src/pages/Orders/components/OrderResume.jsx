import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import AddProduct from './AddProduct';
import { useNavigate } from 'react-router-dom';

export default function OrderResume({ order, setOrder, isEdit = false }) {
    const [showAddProduct, setShowAddProduct] = useState(false);
    const navigate = useNavigate();

    const getCurrentDate = () => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Añade un 0 al inicio si el mes es menor a 10
        const day = String(today.getDate()).padStart(2, '0'); // Añade un 0 al inicio si el día es menor a 10
        const year = today.getFullYear();
        return `${month}/${day}/${year}`;
    };

    const summaryFields = [
        { label: "Date", value: getCurrentDate(), id: "date" },
        { label: "# Products", value: order.orderProducts.reduce((acc, product) => acc + product.quantity, 0), id: "products" },
        { label: "Final Price ($)", value: order.total.toFixed(2), id: "finalPrice" }
    ];

    const handleOrderNumberChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) { // Validar que solo se permiten números
            setOrder({ ...order, number: value });
        }
    };

    const handleStatusChange = (e) => {
        setOrder({ ...order, status: e.target.value });
    };

    const handleAddProduct = (product) => {
        const newOrderProducts = [...order.orderProducts, { id: product.id, price: product.unitPrice * product.quantity, quantity: product.quantity, product }];
        const newTotal = newOrderProducts.reduce((acc, p) => acc + p.price, 0);
        setOrder({ ...order, orderProducts: newOrderProducts, total: newTotal });
    };

    const handleCancel = () => {
        navigate('/my-orders');
    };

    const isSaveDisabled = order.orderProducts.length === 0 || !order.number;

    return (
        <div className="max-w-sm px-4 bg-white border-l border-black">
            <h2 className="text-2xl font-bold mb-4 text-center">Resume of the order</h2>
            <form>
                <div className="p-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="orderNumber">
                        Order Number
                    </label>
                    <input
                        id="orderNumber"
                        type="text"
                        value={order.number}
                        onChange={handleOrderNumberChange}
                        className="appearance-none border border-black rounded w-full py-2 px-3 text-center text-gray-700 leading-tight focus:outline-none"
                    />
                </div>
                {summaryFields.map(field => (
                    <div className="p-1" key={field.id}>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.id}>
                            {field.label}
                        </label>
                        <input
                            id={field.id}
                            type="text"
                            value={field.value}
                            readOnly
                            className="appearance-none border border-black rounded w-full py-2 px-3 text-center text-gray-700 leading-tight focus:outline-none"
                        />
                    </div>
                ))}
                {isEdit && (
                    <div className="p-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="orderStatus">
                            Status
                        </label>
                        <select
                            id="orderStatus"
                            value={order.status}
                            onChange={handleStatusChange}
                            className="appearance-none border border-black rounded w-full py-2 px-3 text-center text-gray-700 leading-tight focus:outline-none"
                        >
                            <option value="Pending">Pending</option>
                            <option value="In progress">In progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                )}
                <div className="flex justify-center items-center my-8">
                    <button
                        type="button"
                        onClick={() => setShowAddProduct(true)}
                        className="bg-[#1585D7] text-white py-2 px-4 rounded-lg flex items-center focus:outline-none"
                    >
                        <span className="mr-2">+</span> Add a product
                    </button>
                </div>
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="border border-[#EF5350] text-[#EF5350] bg-white py-2 px-4 rounded-lg flex items-center focus:outline-none"
                    >
                        <span className="mr-2">✕</span> Cancel
                    </button>
                    <button
                        type="button"
                        className={`bg-[#1585D7] text-white py-2 px-4 rounded-lg flex items-center focus:outline-none ${isSaveDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSaveDisabled}
                    >
                        <FaSave className="mr-2" /> Save
                    </button>
                </div>
            </form>
            {showAddProduct && (
                <AddProduct
                    onAdd={handleAddProduct}
                    onClose={() => setShowAddProduct(false)}
                />
            )}
        </div>
    );
}
