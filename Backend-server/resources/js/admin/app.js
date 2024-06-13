import '../bootstrap';
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js";
import "admin-lte/dist/js/adminlte.min.js";
import router from '@/admin/router';
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(router);
app.mount('#app')