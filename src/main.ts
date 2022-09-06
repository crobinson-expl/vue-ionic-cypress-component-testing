import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue'
import App from './App.vue'

import './assets/main.css'

createApp(App)
    .use(IonicVue)
    .mount('#app')
