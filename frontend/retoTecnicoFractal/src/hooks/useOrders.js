import { useState, useEffect } from 'react';
import axios from 'axios';

export const useOrders = () => {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}orders`);
            setOrders(response.data);
            console.log("response",response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return { orders };
}
