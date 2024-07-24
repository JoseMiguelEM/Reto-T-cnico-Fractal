import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { tableStyles } from '../../utils';
import PopupEditOrderProduct from './PopupEditOrderProduct';
import PopupDeleteOrderProduct from './PopupDeleteOrderProduct';

const productCols = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'unitPrice', label: 'Unit Price' },
    { key: 'quantity', label: 'Quantity' },
    { key: 'parcialPrice', label: 'Parcial Price' },
    { key: 'options', label: 'Options' },
];

export default function OrderProductsTable({ products, updateProductQuantity, deleteProduct }) {
    const [editingProduct, setEditingProduct] = useState(null);
    const [deletingProduct, setDeletingProduct] = useState(null);

    const handleEditClick = (product) => {
        setEditingProduct(product);
    };

    const handleDeleteClick = (product) => {
        setDeletingProduct(product);
    };

    const handleSave = (productId, quantity) => {
        updateProductQuantity(productId, quantity);
        setEditingProduct(null);
    };

    const handleDelete = (productId) => {
        deleteProduct(productId);
        setDeletingProduct(null);
    };

    const productsFormatted = products.map((product) => {
        return {
            id: product.id,
            name: product.product.name,
            quantity: product.quantity,
            unitPrice: product.product.unitPrice,
            parcialPrice: product.price,
        };
    });

    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold mb-4">Products in the order</h2>
            <table className={tableStyles.table} style={{ borderSpacing: '0 10px' }}>
                <thead>
                    <tr>
                        {productCols.map(col => (
                            <th key={col.key} scope="col" className={`${tableStyles.th} ${col.className || ''}`}>
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className={tableStyles.tbody}>
                    {productsFormatted.map(product => (
                        <tr key={product.id} className={tableStyles.tr}>
                            <td className={`${tableStyles.tdLeft} ${tableStyles.iconCell}`}>{product.id}</td>
                            <td className={tableStyles.td}>{product.name}</td>
                            <td className={tableStyles.td}>${product.unitPrice.toFixed(2)}</td>
                            <td className={tableStyles.td}>{product.quantity}</td>
                            <td className={tableStyles.td}>${product.parcialPrice.toFixed(2)}</td>
                            <td className={`${tableStyles.tdRight} ${tableStyles.iconCell}`}>
                                <div className={tableStyles.tdOptions} style={{ justifyContent: 'flex-end' }}>
                                    <FaEdit className="text-black cursor-pointer" onClick={() => handleEditClick(product)} />
                                    <FaTrash className="text-black cursor-pointer" onClick={() => handleDeleteClick(product)} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editingProduct && (
                <PopupEditOrderProduct
                    product={editingProduct}
                    onSave={handleSave}
                    onClose={() => setEditingProduct(null)}
                />
            )}
            {deletingProduct && (
                <PopupDeleteOrderProduct
                    product={deletingProduct}
                    onDelete={handleDelete}
                    onClose={() => setDeletingProduct(null)}
                />
            )}
        </div>
    );
}
