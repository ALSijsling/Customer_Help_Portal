import './bootstrap';

import { createApp } from 'vue';
import App from './App.vue';
import './../css/app.css';
import router from './services/router/index';

createApp(App)
.use(router)
.mount('#app')