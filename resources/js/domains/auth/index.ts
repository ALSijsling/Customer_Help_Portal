import { computed, ref } from 'vue';
import { goToRoute, registerBeforeRouteMiddleware } from '../../services/router';
import { getRequest, postRequest } from '../../services/http';
import { User } from './types';
import Home from '../tickets/pages/Home.vue';
import Login from './pages/Login.vue';

export const authRoutes = [
    {path: '/', name: 'Home', component: Home, meta: {auth: true, canSeeWhenLoggedIn: true}},
    {path: '/login', name: 'Login', component: Login, meta: {auth: false, canSeeWhenLoggedIn: false}},
]

const loggedInUser = ref<User | null>(null);

export const isLoggedIn = computed(()=> loggedInUser.value !== null);
export const getLoggedInUser = computed(() => loggedInUser.value);

export const loginUser = async (user: User) => {
    const {data} = await postRequest('/login', user);
    if (!data) return;
    loggedInUser.value = data.user;
    goToRoute('Home');
}

export const me = async () => {
    const {data} = await getRequest('me');
    loggedInUser.value = data.user;
}

export const checkIfLoggedIn = async() => {
    const {data} = await getRequest('me');
    loggedInUser.value = data.user;
}

export const goToLoginPage = () => goToRoute('Login');

registerBeforeRouteMiddleware(({meta}) => {
    if (!isLoggedIn.value && meta?.auth) {
        goToLoginPage();
        return true;
    }
    if (isLoggedIn.value && !meta?.canSeeWhenLoggedIn) {
        goToRoute('Home');
        return true;
    }
    return false;
})