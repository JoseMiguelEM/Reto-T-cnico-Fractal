import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OrderProductsTable from './components/OrderProductsTable';
import OrderResume from './components/OrderResume';
import { useOrders } from '../../hooks/useOrders';
// Simulación de obtención de datos de órdenes (reemplaza esto con una llamada a tu API o base de datos)

const getOrderById = (id, orders) => orders.find(order => order.id === parseInt(id));

function EditOrder() {
    const {orders} = useOrders();
    const { id } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        if (id && orders) {
            const orderData = getOrderById(id, orders);
            if (orderData) {
                setOrder(orderData);
                console.log("orderData",orderData);
            }
        }
    }, [id, orders]);
    useEffect(() => {
        console.log("order edited",order);
    }, [order]);
    if (!order) {
        return <div>Loading...</div>; // Mostrar un mensaje de carga o similar mientras se obtienen los datos
    }

    const updateProductQuantity = (productId, quantity) => {
        const updatedProducts = order.orderProducts.map(product =>
            product.id === productId ? { ...product, quantity, price: product.product.unitPrice * quantity } : product
        );
        const total = updatedProducts.reduce((sum, product) => sum + product.price, 0);
        setOrder({ ...order, orderProducts: updatedProducts, total });
        
    };

    const deleteProduct = (productId) => {
        const updatedProducts = order.orderProducts.filter(product => product.id !== productId);
        const total = updatedProducts.reduce((sum, product) => sum + product.price, 0);
        setOrder({ ...order, orderProducts: updatedProducts, total });
    };

    return (
        <div className='px-8 py-4'>
            <div className="text-black w-full ">
                <div className="text-3xl font-black">Edit Order</div>
                <div className="text-l">Edit the next form</div>
            </div>
            <div className="flex space-x-4 py-4">
                <div className="w-3/4">
                    <OrderProductsTable 
                        products={order.orderProducts} 
                        updateProductQuantity={updateProductQuantity} 
                        deleteProduct={deleteProduct} 
                    />
                </div>
                <div className="w-1/4">
                    <OrderResume order={order} setOrder={setOrder} isEdit={true} />
                </div>
            </div>
        </div>
    );
}

export default EditOrder;
