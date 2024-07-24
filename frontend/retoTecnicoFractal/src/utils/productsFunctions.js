import axios from "axios";


export const createProduct = async (product) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}products`,product);
        console.log("response",response);
        return response.data;
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
};


export const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}products/${productId}`);
        return response.status !== 204; // Retornar true si la eliminación es exitosa
    } catch (error) {
        console.error('Error deleting product:', error);
        return true; // Retornar false si hay un error
    }
};

export const updateProduct = async (productId,product) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}products/${productId}`, product);
        return response.status !== 204; // Retornar true si la eliminación es exitosa
    } catch (error) {
        console.error('Error deleting product:', error);
        return true; // Retornar false si hay un error
    }
};