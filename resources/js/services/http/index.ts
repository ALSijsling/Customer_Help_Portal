import axios from 'axios';
import type { ResponseMiddleware, ResponseErrorMiddleware, RequestMiddleware } from './types';

const baseURL = '/api';

const http = axios.create({
    baseURL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

const requestMiddleware: RequestMiddleware[] = [];
const responseMiddleware: ResponseMiddleware[] = [];
const responseErrorMiddleware: ResponseErrorMiddleware[] = [];

http.interceptors.request.use(request => {
    for (const middleware of requestMiddleware) middleware(request);
    return request;
});

http.interceptors.response.use(
    response => {
        for (const middleware of responseMiddleware) middleware(response);
        return response;
    },
    error => {
        if (!error.response) return Promise.reject(error);
        for (const middleware of responseErrorMiddleware) middleware(error);
        return Promise.reject(error);
    }
)

export const getRequest = (endpoint: string) => http.get(endpoint);
export const postRequest = (endpoint: string, data: unknown) => http.post(endpoint, data);
export const updateRequest = (endpoint: string, data: unknown) => http.patch(endpoint, data);
export const deleteRequest = (endpoint: string) => http.delete(endpoint);

export const registerResponseMiddleware = (middlewareFunc: ResponseMiddleware) => responseMiddleware.push(middlewareFunc);
export const registerResponseErrorMiddleware = (middlewareFunc: ResponseErrorMiddleware) => responseErrorMiddleware.push(middlewareFunc);