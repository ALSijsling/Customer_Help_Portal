import { postRequest } from '../../services/http/index';
import { goToRoute } from '../../services/router';
import { User } from './types';

export const loginUser = async (endpoint: string, item: User) => {
    const {} = await postRequest(endpoint, item);
    goToRoute('Home');
};