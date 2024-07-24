import { createApp } from 'vue';
import App from './App.vue';
import './../css/app.css';
import { addRoutes, useRouterInApp } from './services/router';
import { routes } from './routes';

const app = createApp(App);

addRoutes(routes);
useRouterInApp(app);
app.mount('#app');