import {createRouter, createWebHistory} from 'vue-router'
import TheMainView from './components/TheMainView.vue'
import TheTradeView from "./components/trade/TheTradeView.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: TheMainView
        },
        {
            path: '/trade',
            name: 'trade',
            // component: () => import('./components/trade/TheTradeView.vue')
            component: TheTradeView
        }
    ]
})



