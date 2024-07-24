import axios from "axios";


export const createOrder = async (order) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}orders`,order);
        console.log("response",response);
        return response.data;
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
};


export const deleteOrder = async (orderId) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}orders/${orderId}`);
        return response.status !== 204; // Retornar true si la eliminación es exitosa
    } catch (error) {
        console.error('Error deleting product:', error);
        return true; // Retornar false si hay un error
    }
};

export const updateOrder = async (orderId,order) => {
    console.log("el id es: ",orderId);
    console.log("el order es: ",order);
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}orders/${orderId}`, order);
        return response.status !== 204; // Retornar true si la eliminación es exitosa
    } catch (error) {
        console.error('Error deleting product:', error);
        return true; // Retornar false si hay un error
    }
};