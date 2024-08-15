import type { LoggedInUser, LoginCredentials, ResponseErrorMiddleware } from './types';

import { computed, ref } from 'vue';
import { getRequest, postRequest, registerResponseErrorMiddleware } from '../http';

import { goToRoute, registerBeforeRouteMiddleware } from '../router';
import Home from '../../domains/tickets/pages/Home.vue';
import Login from '../../domains/auth/pages/Login.vue';
import { NavigationGuard } from 'vue-router';

export const authRoutes = [
    {path: '/', name: 'Home', component: Home, meta: {auth: true, canSeeWhenLoggedIn: true}},
    {path: '/login', name: 'Login', component: Login, meta: {auth: false, canSeeWhenLoggedIn: false}},
]

export const goToLoginPage = () => goToRoute('Login');

const beforeMiddleware: NavigationGuard = ({meta}) => {
    if (!isLoggedIn.value && meta.auth) {
        goToLoginPage();
        return true;
    }

    if (isLoggedIn.value && !meta.canSeeWhenLoggedIn) {
        goToRoute('Home')
        return true;
    }

    return false;
}

registerBeforeRouteMiddleware(beforeMiddleware);

const loggedInUser = ref<LoggedInUser | undefined>();

export const getLoggedInUser = () => {
    if (!loggedInUser.value) throw Error("Can't call getLoggedInUser when not logged in");

    return loggedInUser.value;
}

export const isLoggedIn = computed(() => loggedInUser.value !== undefined);

const HTTP_UNAUTHORIZED = 401;

const responseErrorMiddleware: ResponseErrorMiddleware = ({response}) => {
    if (!response) return;
    const {status} = response;
    if (status === HTTP_UNAUTHORIZED && isLoggedIn.value) {
        logoutOfApp();
    }
}

registerResponseErrorMiddleware(responseErrorMiddleware);

const setLoggedInUser = (user: LoggedInUser) => {
    loggedInUser.value = user;
}

const logoutOfApp = () => {
    localStorage.clear();
    window.location.reload();
}

export const login = async (credentials: LoginCredentials) => {
    const response = await postRequest('/login', credentials);
    
    setLoggedInUser(response.data);
    goToRoute('Home');

    return response;
}

export const checkIfLoggedIn = async () => {
    const {data} = await getRequest('/me');

    setLoggedInUser(data.user);
}