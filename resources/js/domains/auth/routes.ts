import { addRoute } from '../../services/router/index';

export const authRoutes = () => {
    addRoute('login', 'Login', 'auth');
}