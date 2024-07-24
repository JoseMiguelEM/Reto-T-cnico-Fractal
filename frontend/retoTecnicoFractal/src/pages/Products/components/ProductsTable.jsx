import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const tableStyles = {
    table: "min-w-full border-separate",
    thead: "bg-gray-100",
    th: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b-2 border-black",
    tbody: "bg-gray-50",
    tr: "bg-[#B6BFC9]/50 rounded-lg",
    td: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center",
    tdLeft: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center rounded-l-lg",
    tdRight: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center rounded-r-lg",
    tdOptions: "flex justify-center space-x-4",
    iconCell: "w-20", // Width fixed to 80px
};

export default function ProductsTable({ products }) {
    return (
        <div className="overflow-x-auto">
            <table className={tableStyles.table} style={{ borderSpacing: '0 10px' }}>
                <thead className={tableStyles.thead}>
                    <tr>
                        <th scope="col" className={`${tableStyles.th} ${tableStyles.iconCell}`}>ID</th>
                        <th scope="col" className={tableStyles.th}>Name</th>
                        <th scope="col" className={tableStyles.th}>Unit Price</th>
                        <th scope="col" className={`${tableStyles.th} ${tableStyles.iconCell}`}>Options</th>
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
                                    <FaEdit className="text-black cursor-pointer" />
                                    <FaTrash className="text-black cursor-pointer" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
