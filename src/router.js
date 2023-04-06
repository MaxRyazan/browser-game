import {createRouter, createWebHistory} from 'vue-router'
import TheMainView from './components/TheMainView.vue'
import TheLoginView from "./components/account/TheLoginView.vue";
import TheRegistrationView from "./components/account/TheRegistrationView.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: TheMainView
        },
        {
            path: '/login',
            name: 'login',
            component: TheLoginView
        },
        {
            path: '/registration',
            name: 'registration',
            component: TheRegistrationView
        },
        // {
        //     path: '/trade',
        //     name: 'trade',
        //     component: () => import('./components/trade/TheTradeView.vue')
        //     // component: TheTradeView
        // }
    ]
})



