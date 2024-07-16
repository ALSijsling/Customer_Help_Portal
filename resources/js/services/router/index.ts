import { createRouter, createWebHistory } from 'vue-router';
import Home from '../../domains/tickets/pages/Home.vue';
import { authRoutes } from '../../domains/auth/routes';

const routes = [{path: '/', name: 'home', component: Home}];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export const goToRoute = (routeName: string) => {
    router.push({
        name: routeName
    });
};

export const addRoute = (routeName: string, component: string, domain: string) => {
    router.addRoute({path: `/${routeName}`, name: routeName, component: () => import(`../../domains/${domain}/pages/${component}.vue`)})
}

authRoutes();

export default router;