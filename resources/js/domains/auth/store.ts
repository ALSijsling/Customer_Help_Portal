import { goToRoute } from '../../services/router';
import { User } from './types';
import { postRequest } from '../../services/http';

export const loginUser = async (user: User) => {
    const {} = await postRequest('/login', user);
    goToRoute('Home');
}