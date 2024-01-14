import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue'
import router from './routes'

createApp(App).use(router).mount('#app')
