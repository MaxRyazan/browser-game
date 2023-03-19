import { createApp } from 'vue'
import './css/tradeStyles.css'
import App from './App.vue'
import {router} from "./router.js";
import store from "./globalStore.js";

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
