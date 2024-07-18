import { AxiosError, AxiosResponse } from "axios";

export type ResponseMiddleware = (response: AxiosResponse) => void;
export type ResponseErrorMiddleware = (error: AxiosResponseError) => void;

type AxiosResponseError = AxiosError<
    {
        message?: string;
        errors?: {
            [property: string]: string[];
        };
    },
    unknown
>;