import axios from 'axios';

const baseURL = '/api';

const http = axios.create({
    baseURL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export const getRequest = (endpoint: string) => http.get(endpoint);
export const postRequest = (endpoint: string, data: object) => http.post(endpoint, data);
export const updateRequest = (endpoint: string, data: object) => http.patch(endpoint, data);
export const deleteRequest = (endpoint: string, data: object) => http.delete(endpoint, data);