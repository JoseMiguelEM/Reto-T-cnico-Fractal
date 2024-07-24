import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrdersTable from './components/OrdersTable';
import { useOrders } from '../../hooks/useOrders.js';

export default function OrdersPage() {
    const { orders } = useOrders();
    const cantidadOrders = orders.length;
    const navigate = useNavigate(); // Hook para navegar
    console.log(orders);
    const handleNewOrderClick = () => {
        navigate('/add-order');
    };

    return (
        <div className='px-8 py-4'>
            <div className="flex justify-between items-center mb-4">
                <div className="text-black w-full">
                    <div className="text-3xl font-black">My Orders</div>
                    <div className="text-l">{cantidadOrders} registered orders</div>
                </div>
                <div
                    className="text-white text-xl text-center rounded-lg cursor-pointer bg-[#1585D7] px-4 py-2"
                    onClick={handleNewOrderClick} // Añadir evento de click
                >
                    + New Order
                </div>
            </div>
            <OrdersTable orders={orders} />
        </div>
    );
}
