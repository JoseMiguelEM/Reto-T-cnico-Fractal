import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import PopupEditProduct from './PopupEditProduct';
import PopupDeleteProduct from './PopupDeleteProduct';
import { tableStyles, productCols } from '../../utils'; // Importar los estilos y columnas

export default function ProductsTable({ products }) {
    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setIsEditPopupOpen(true);
    };

    const handleDeleteClick = (product) => {
        setSelectedProduct(product);
        setIsDeletePopupOpen(true);
    };

    return (
        <div className="overflow-x-auto">
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
                    {products.map(product => (
                        <tr key={product.id} className={tableStyles.tr}>
                            <td className={`${tableStyles.tdLeft} ${tableStyles.iconCell}`}>{product.id}</td>
                            <td className={tableStyles.td}>{product.name}</td>
                            <td className={tableStyles.td}>${product.unitPrice.toFixed(2)}</td>
                            <td className={`${tableStyles.tdRight} ${tableStyles.iconCell}`}>
                                <div className={tableStyles.tdOptions}>
                                    <FaEdit className="text-black cursor-pointer" onClick={() => handleEditClick(product)} />
                                    <FaTrash className="text-black cursor-pointer" onClick={() => handleDeleteClick(product)} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isEditPopupOpen && (
                <PopupEditProduct
                    product={selectedProduct}
                    onClose={() => setIsEditPopupOpen(false)}
                />
            )}
            {isDeletePopupOpen && (
                <PopupDeleteProduct
                    product={selectedProduct}
                    onClose={() => setIsDeletePopupOpen(false)}
                />
            )}
        </div>
    );
}
