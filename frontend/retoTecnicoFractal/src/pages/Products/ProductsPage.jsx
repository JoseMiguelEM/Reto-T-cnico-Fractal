import React from 'react'
import {products} from '../../data/products.js'
import ProductsTable from './components/ProductsTable.jsx'
export default function ProductsPage() {
    const cantidadProductos = products.length;
    return (
        <div className='px-8 py-4'>
            <div className="flex justify-between items-center mb-4">
                <div className="text-black w-full">
                    <div className="text-3xl font-black">My Products</div>
                    <div className="text-l">{cantidadProductos} registered products</div>
                </div>
                <div className="text-white text-xl text-center rounded-lg cursor-pointer bg-[#1585D7]">
                    + New Product
                </div>
            </div>
            <ProductsTable products={products}/>
        </div>
        

    )
}
