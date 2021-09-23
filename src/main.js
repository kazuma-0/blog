import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// eslint-disable-next-line no-unused-vars
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core'
import Alert from './components/Alert.vue'
import Supabase from './plugins/subabase'
import Markdown from 'vue3-markdown-it';

const app = createApp(App)
app.config.globalProperties.$supabase = Supabase;
app.component('alert-view', Alert)
app.use(store)
app.use(Markdown)
app.use(router)
app.mount('#app')
