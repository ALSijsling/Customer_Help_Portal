import { App } from 'vue';
import { createRouter, createWebHistory, NavigationGuard, RouteRecordRaw } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [],
});

export const addRoutes = (routes: RouteRecordRaw[]) => {
    for (const route of routes) router.addRoute(route);
}

export const useRouterInApp = (app: App<Element>) => app.use(router);

export const goToRoute = (routeName: string) => {
    router.push({
        name: routeName
    });
};

const beforeRouteMiddleware: NavigationGuard[] = [
    (to, from) => {
        const fromQuery = from.query.from;
        if (fromQuery && typeof fromQuery === 'string') {
            if (fromQuery === to.fullPath) return false;
            router.push(fromQuery);
            return true;
        }
        return false;
    },
];

router.beforeEach(async (to, from, next) => {
    for (const middlewareFunc of beforeRouteMiddleware) {
        if (await middlewareFunc(to, from, next)) return next(false);
    }
    return next();
});

export const registerBeforeRouteMiddleware = (middleware: NavigationGuard) => beforeRouteMiddleware.push(middleware);

export default router;