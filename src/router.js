import {createRouter, createWebHistory} from 'vue-router'
import TheMainView from './components/TheMainView.vue'
import TheLoginView from "./components/account/TheLoginView.vue";
import TheRegistrationView from "./components/account/TheRegistrationView.vue";
import tradeStore from "./store_modules/tradeStore.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: TheMainView,
            beforeEnter(){
               if(!auth()) {
                   return '/login'
               }
            },
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
    ]
});


export default router

function auth(){
    if(!tradeStore.state.player.login){
        return false
    }
    return true
}


