import React, { useEffect, useState } from 'react';
import OrderProductsTable from './components/OrderProductsTable';
import OrderResume from './components/OrderResume';

function AddOrder() {
    const [order, setOrder] = useState({
        id: "",
        number: "",
        status: "Pending",
        date: new Date(),
        orderProducts: [
        ],
        total: 0
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
