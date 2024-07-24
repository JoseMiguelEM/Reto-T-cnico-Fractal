import React, { useEffect, useState } from 'react';
import OrderProductsTable from './components/OrderProductsTable';
import OrderResume from './components/OrderResume';

function AddOrder() {
    const formatDate = (date) => {
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Mes en formato de dos dígitos
        const day = String(date.getDate()).padStart(2, '0'); // Día en formato de dos dígitos
        const year = date.getFullYear(); // Año en formato de cuatro dígitos
        return `${month}/${day}/${year}`;
    };

    const [order, setOrder] = useState({
        number: "",
        status: "Pending",
        date: formatDate(new Date()), // Formatear la fecha al inicializar el estado
        orderProducts: [],
        total: 0,
        active: true
    });
    //console cada que order sufre un cambio
    useEffect(() => {
        console.log("order has been updated", order);
    }, [order]);
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
                <div className="text-3xl font-black">Add Order</div>
                <div className="text-l">Complete the next form</div>
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
                    <OrderResume order={order} setOrder={setOrder} />
                </div>
            </div>
        </div>
    );
}

export default AddOrder;
