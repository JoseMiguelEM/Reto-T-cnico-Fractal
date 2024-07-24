const tableStyles = {
    table: "min-w-full border-separate",
    th: "px-6 pb-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b-2 border-black",
    tbody: "bg-gray-50",
    tr: "bg-[#B6BFC9]/50 rounded-lg",
    td: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center",
    tdLeft: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center rounded-l-lg",
    tdRight: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center rounded-r-lg",
    tdOptions: "flex justify-center space-x-4",
    iconCell: "w-20", // Width fixed to 80px
};

const getStatusClass = (status) => {
    switch (status) {
        case 'Pending':
            return 'bg-[#D4BC41] text-white';
        case 'Completed':
            return 'bg-[#2A7C76] text-white';
        case 'In Progress':
            return 'bg-[#CACFD6] text-black';
        default:
            return '';
    }
};

const statusStyles = {
    base: "px-2 py-1 text-xs font-semibold mx-auto",
    rounded: "rounded",
    sizeLimit: "max-h-[20px] flex items-center justify-center",
};

const ordersCols = [
    { label: "ID", key: "ID", className: tableStyles.iconCell },
    { label: "Order #", key: "OrderNumber" },
    { label: "Date", key: "Date" },
    { label: "Number of Products", key: "NumberOfProducts" },
    { label: "Final Price", key: "FinalPrice" },
    { label: "Status", key: "Status" },
    { label: "Options", key: "Options", className: tableStyles.iconCell }
];

const productCols = [
    { label: "ID", key: "id", className: tableStyles.iconCell },
    { label: "Name", key: "name" },
    { label: "Unit Price", key: "unitPrice" },
    { label: "Options", key: "options", className: tableStyles.iconCell }
];

export { tableStyles, getStatusClass, statusStyles, ordersCols, productCols };
