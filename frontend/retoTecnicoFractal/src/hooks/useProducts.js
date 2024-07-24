import { useState, useEffect } from 'react';
import axios from 'axios';

export const useProducts = () => {
    const [products, setProducts] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:8080/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return { products };
}
