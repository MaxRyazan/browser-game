import {createApp} from 'vue'
import './css/tradeStyles.css'
import './css/globalStyles.scss'
import App from './App.vue'
import router from "./router.js";
import globalStore from "./globalStore.js";
import {initPrimeVUE} from './primevue'


const app = createApp(App)


app.use(router)
    .use(globalStore)
// .mount('#app')
initPrimeVUE(app)
app.mount('#app')