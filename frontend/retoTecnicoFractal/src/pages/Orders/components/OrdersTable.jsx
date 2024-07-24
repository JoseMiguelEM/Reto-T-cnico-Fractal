import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import PopupDeleteOrder from './PopupDeleteOrder'; // Asegúrate de que la ruta sea correcta
import { tableStyles, getStatusClass, statusStyles, ordersCols } from '../../utils'; // Importar los estilos y columnas

export default function OrdersTable({ orders }) {
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleDeleteClick = (order) => {
        setSelectedOrder(order);
        setIsDeletePopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsDeletePopupOpen(false);
        setSelectedOrder(null);
    };

    return (
        <div className="overflow-x-auto">
            <table className={tableStyles.table} style={{ borderSpacing: '0 10px' }}>
                <thead>
                    <tr>
                        {ordersCols.map(col => (
                            <th key={col.key} scope="col" className={`${tableStyles.th} ${col.className || ''}`}>
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className={tableStyles.tbody}>
                    {orders.map(order => (
                        <tr key={order.ID} className={tableStyles.tr}>
                            <td className={`${tableStyles.tdLeft} ${tableStyles.iconCell}`}>{order.ID}</td>
                            <td className={tableStyles.td}>{order.OrderNumber}</td>
                            <td className={tableStyles.td}>{order.Date}</td>
                            <td className={tableStyles.td}>{order.NumberOfProducts}</td>
                            <td className={tableStyles.td}>{order.FinalPrice}</td>
                            <td className={tableStyles.td}>
                                <span className={`${getStatusClass(order.Status)} ${statusStyles.base} ${statusStyles.rounded} ${statusStyles.sizeLimit}`}>
                                    {order.Status}
                                </span>
                            </td>
                            <td className={`${tableStyles.tdRight} ${tableStyles.iconCell}`}>
                                <div className={tableStyles.tdOptions} style={{ justifyContent: 'flex-end' }}>
                                    {order.Status !== 'Completed' && (
                                        <FaEdit className="text-black cursor-pointer" />
                                    )}
                                    <FaTrash className="text-black cursor-pointer" onClick={() => handleDeleteClick(order)} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isDeletePopupOpen && selectedOrder && (
                <PopupDeleteOrder
                    order={selectedOrder}
                    onClose={handleClosePopup}
                />
            )}
        </div>
    );
}
