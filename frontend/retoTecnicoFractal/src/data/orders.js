export const orders = [
    {
      ID: 1, OrderNumber: 3736, Date: '2023-01-01', NumberOfProducts: 4, FinalPrice: 108.00, Status: 'Pending',
      products: [{ id: 20, name: 'Xiaomi Redmi 7', unitPrice: 27.00, quantity: 4, parcialPrice: 108.00 }]
    },
    {
      ID: 2, OrderNumber: 3694, Date: '2023-01-02', NumberOfProducts: 3, FinalPrice: 103.47, Status: 'In Progress',
      products: [
        { id: 1, name: 'Apple iPhone 12', unitPrice: 12.99, quantity: 1, parcialPrice: 12.99 },
        { id: 2, name: 'Samsung Galaxy S21', unitPrice: 23.49, quantity: 2, parcialPrice: 46.98 },
        { id: 3, name: 'Sony WH-1000XM4', unitPrice: 45.00, quantity: 1, parcialPrice: 45.00 }
      ]
    },
    {
      ID: 3, OrderNumber: 4204, Date: '2023-01-03', NumberOfProducts: 1, FinalPrice: 45.00, Status: 'Completed',
      products: [{ id: 4, name: 'Google Pixel 5', unitPrice: 45.00, quantity: 1, parcialPrice: 45.00 }]
    },
    {
      ID: 4, OrderNumber: 4503, Date: '2023-01-04', NumberOfProducts: 2, FinalPrice: 90.00, Status: 'Pending',
      products: [
        { id: 5, name: 'Bose QuietComfort 35', unitPrice: 27.75, quantity: 1, parcialPrice: 27.75 },
        { id: 6, name: 'Dell XPS 13', unitPrice: 14.99, quantity: 4, parcialPrice: 59.96 }
      ]
    },
    {
      ID: 5, OrderNumber: 4885, Date: '2023-01-05', NumberOfProducts: 6, FinalPrice: 222.00, Status: 'In Progress',
      products: [
        { id: 7, name: 'HP Spectre x360', unitPrice: 34.00, quantity: 2, parcialPrice: 68.00 },
        { id: 8, name: 'Microsoft Surface Pro 7', unitPrice: 22.49, quantity: 1, parcialPrice: 22.49 },
        { id: 9, name: 'Lenovo ThinkPad X1', unitPrice: 40.00, quantity: 1, parcialPrice: 40.00 },
        { id: 10, name: 'Asus ZenBook 14', unitPrice: 18.50, quantity: 3, parcialPrice: 55.50 },
        { id: 11, name: 'Acer Swift 3', unitPrice: 33.99, quantity: 1, parcialPrice: 33.99 },
        { id: 12, name: 'Razer Blade 15', unitPrice: 21.99, quantity: 2, parcialPrice: 43.98 }
      ]
    },
    {
      ID: 6, OrderNumber: 1465, Date: '2023-01-06', NumberOfProducts: 4, FinalPrice: 68.99, Status: 'Pending',
      products: [
        { id: 13, name: 'Alienware m15 R3', unitPrice: 17.25, quantity: 1, parcialPrice: 17.25 },
        { id: 14, name: 'Apple MacBook Pro', unitPrice: 25.00, quantity: 1, parcialPrice: 25.00 },
        { id: 15, name: 'Huawei MateBook X Pro', unitPrice: 30.75, quantity: 1, parcialPrice: 30.75 },
        { id: 16, name: 'Google Pixelbook Go', unitPrice: 29.99, quantity: 1, parcialPrice: 29.99 }
      ]
    },
    {
      ID: 7, OrderNumber: 4525, Date: '2023-01-07', NumberOfProducts: 11, FinalPrice: 183.39, Status: 'Completed',
      products: [
        { id: 17, name: 'Logitech MX Master 3', unitPrice: 13.49, quantity: 1, parcialPrice: 13.49 },
        { id: 18, name: 'Anker PowerCore 10000', unitPrice: 50.00, quantity: 1, parcialPrice: 50.00 },
        { id: 19, name: 'Nintendo Switch', unitPrice: 35.99, quantity: 2, parcialPrice: 71.98 },
        { id: 20, name: 'Samsung Galaxy Buds', unitPrice: 27.00, quantity: 2, parcialPrice: 54.00 }
      ]
    },
    {
      ID: 8, OrderNumber: 6475, Date: '2023-01-08', NumberOfProducts: 7, FinalPrice: 218.93, Status: 'Pending',
      products: [
        { id: 1, name: 'Apple iPhone 12', unitPrice: 12.99, quantity: 2, parcialPrice: 25.98 },
        { id: 2, name: 'Samsung Galaxy S21', unitPrice: 23.49, quantity: 1, parcialPrice: 23.49 },
        { id: 3, name: 'Sony WH-1000XM4', unitPrice: 45.00, quantity: 2, parcialPrice: 90.00 },
        { id: 4, name: 'Google Pixel 5', unitPrice: 45.00, quantity: 1, parcialPrice: 45.00 },
        { id: 5, name: 'Bose QuietComfort 35', unitPrice: 27.75, quantity: 1, parcialPrice: 27.75 },
        { id: 6, name: 'Dell XPS 13', unitPrice: 14.99, quantity: 1, parcialPrice: 14.99 }
      ]
    },
    {
      ID: 9, OrderNumber: 2573, Date: '2023-01-09', NumberOfProducts: 8, FinalPrice: 283.59, Status: 'In Progress',
      products: [
        { id: 7, name: 'HP Spectre x360', unitPrice: 34.00, quantity: 1, parcialPrice: 34.00 },
        { id: 8, name: 'Microsoft Surface Pro 7', unitPrice: 22.49, quantity: 1, parcialPrice: 22.49 },
        { id: 9, name: 'Lenovo ThinkPad X1', unitPrice: 40.00, quantity: 1, parcialPrice: 40.00 },
        { id: 10, name: 'Asus ZenBook 14', unitPrice: 18.50, quantity: 2, parcialPrice: 37.00 },
        { id: 11, name: 'Acer Swift 3', unitPrice: 33.99, quantity: 1, parcialPrice: 33.99 },
        { id: 12, name: 'Razer Blade 15', unitPrice: 21.99, quantity: 2, parcialPrice: 43.98 },
        { id: 13, name: 'Alienware m15 R3', unitPrice: 17.25, quantity: 1, parcialPrice: 17.25 },
        { id: 14, name: 'Apple MacBook Pro', unitPrice: 25.00, quantity: 1, parcialPrice: 25.00 }
      ]
    },
    {
      ID: 10, OrderNumber: 9076, Date: '2023-01-10', NumberOfProducts: 5, FinalPrice: 129.48, Status: 'Completed',
      products: [
        { id: 15, name: 'Huawei MateBook X Pro', unitPrice: 30.75, quantity: 2, parcialPrice: 61.50 },
        { id: 16, name: 'Google Pixelbook Go', unitPrice: 29.99, quantity: 1, parcialPrice: 29.99 },
        { id: 17, name: 'Logitech MX Master 3', unitPrice: 13.49, quantity: 1, parcialPrice: 13.49 },
        { id: 18, name: 'Anker PowerCore 10000', unitPrice: 50.00, quantity: 1, parcialPrice: 50.00 },
        { id: 19, name: 'Nintendo Switch', unitPrice: 35.99, quantity: 2, parcialPrice: 71.98 }
      ]
    }
]