import { useState, useEffect } from 'react';
import axios from 'axios';

export const useProducts = (reload) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}products`);
            console.log('response', response);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    useEffect(() => {
        console.log('fetching products');
        fetchProducts();
    }, [reload]);

    return { products, setProducts };
}
