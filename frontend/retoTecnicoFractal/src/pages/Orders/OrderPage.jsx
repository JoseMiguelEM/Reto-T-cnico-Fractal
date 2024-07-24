import React from 'react';
import OrdersTable from './components/OrdersTable';
import { orders } from '../../data/orders.js';

export default function OrdersPage() {
    const cantidadOrders = orders.length;

    return (
        <div className='px-8 py-4'>
            <div className="flex justify-between items-center mb-4">
                <div className="text-black w-full">
                    <div className="text-3xl font-black">My Orders</div>
                    <div className="text-l">{cantidadOrders} registered orders</div>
                </div>
                <div
                    className="text-white text-xl text-center rounded-lg cursor-pointer bg-[#1585D7] px-4 py-2"
                >
                    + New Order
                </div>
            </div>
            <OrdersTable orders={orders} />
        </div>
    );
}
