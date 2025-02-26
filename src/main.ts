import '@/styles/main.scss';
import '@/styles/tailwind.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import directives from './directives';
import i18n from './i18n';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
directives.forEach(directive => app.use(directive));

app.mount('#app');
