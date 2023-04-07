<template>
    <div class="login_wrapper">
        <div class="login_window">
            <form class="login_container" @submit.prevent="logIn">
                <input type="text"
                       placeholder="Логин"
                       v-model="login"
                       class="login_input"
                >
                <input type="password"
                       placeholder="Пароль"
                       v-model="password"
                       class="login_input"
                >
                <AppMiniButton :type="`submit`" name="Войти" :medium="true"/>
                <transition name="fade">
                    <AppError v-if="error" />
                </transition>
            </form>
        </div>
    </div>
</template>

<script setup>
import {computed, ref, watch} from "vue";
import AppMiniButton from '../mini/AppMiniButton.vue'
import AppError from '../mini/AppError.vue'
import tradeStore from "../../store_modules/tradeStore.js";
import planetStore from "../../store_modules/planetStore.js";
import {FakeData} from "../../FAKE_DATA/FakeData.ts";
import router from "../../router.js";
import {onBeforeRouteLeave} from "vue-router";

const login = ref('')
const password = ref('')
function logIn() {
    // const thisPlayerLogin = login.value
    // const thisPlayerPassword = password.value
    const player1 = JSON.parse(localStorage.getItem('player'))
    const player2 = JSON.parse(localStorage.getItem('Player'))

    if(password.value === player1.password && login.value === player1.login){

        tradeStore.state.player = player1
        tradeStore.state.currentPlanet = player1.playerData.playerPlanets.homeWorld
        router.push('/')
    }
    if(password.value === player2.password && login.value === player2.login){

        tradeStore.state.player = player2
        tradeStore.state.currentPlanet = player2.playerData.playerPlanets.homeWorld
        router.push('/')
    }

    // if(localStorage.getItem('player')){
    //     const playerInDB = JSON.parse(localStorage.getItem('player'))
    //     if(playerInDB.password === thisPlayerPassword && playerInDB.login === thisPlayerLogin){
    //         tradeStore.state.player = playerInDB
    //     } else {
    //         planetStore.commit('sendError', 'Неверные логин или пароль!')
    //     }
    // } else {
    //     console.log('localstorage is empty')
    // }
    router.push('/')
}
const error = computed(() => {
    return  planetStore.state.error.flag
})

watch(error, (value) => {
    if(value){
        setTimeout(() => {
            planetStore.state.error.flag = false
            planetStore.state.error.value = ''
        }, 1500)
    }
})

</script>
<style lang="scss">
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
  transform: scale(0.1);
}
.fade-enter-active,
.fade-leave-active{
  transition: .4s ease;
}
</style>