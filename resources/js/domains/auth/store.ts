import { postRequest } from '../../services/http/index';
import { User } from './types';

export const loginUser = (endpoint: string, item: User) => {
    const {} = postRequest(endpoint, item);
};