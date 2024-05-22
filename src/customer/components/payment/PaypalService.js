// src/services/paypalService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/paypal';

export const createOrder = async () => {
    const response = await axios.get(`${API_URL}/create-order`);
    return response.data;
};

export const confirmPaymentSource = async () => {
    const response = await axios.post(`${API_URL}/confirm-payment-source`);
    return response.data;
};

export const authorizeOrder = async () => {
    const response = await axios.post(`${API_URL}/authorize-order`);
    return response.data;
};

export const captureOrder = async () => {
    const response = await axios.post(`${API_URL}/capture-order`);
    return response.data;
};

export const getOrderDetails = async () => {
    const response = await axios.get(`${API_URL}/get-order-details`);
    return response.data;
};
