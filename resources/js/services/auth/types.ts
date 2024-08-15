import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { User } from "../../domains/auth/types";

export type RequestMiddleware = (request: AxiosRequestConfig) => void;
export type ResponseMiddleware = (response: AxiosResponse) => void;
export type ResponseErrorMiddleware = (error: AxiosError) => void;

export type LoggedInUser = User;

export interface LoginCredentials {
    email: string;
    password: string;
}