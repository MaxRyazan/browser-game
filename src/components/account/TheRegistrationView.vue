<template>
    <div class="login_wrapper">
        <div class="login_window">
            <form class="login_container" @submit.prevent="registration">
                <input type="text"
                       placeholder="Введите логин"
                       v-model="login"
                       class="login_input"
                >
                <input type="text"
                       placeholder="Введите емейл"
                       v-model="email"
                       class="login_input"
                >
                <input type="password"
                       placeholder="Пароль"
                       v-model="password"
                       class="login_input"
                >
                <input type="password"
                       placeholder="Укажиите желаемое название планеты"
                       v-model="planetName"
                       class="login_input"
                >
                <AppMiniButton :type="`submit`" name="Зарегистрироваться" :medium="true"/>
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
import planetStore from "../../store_modules/planetStore.js";
import {Player} from "../../entities/Player.ts";
import {Necrons} from "../../races/Necrons.ts";

const login = ref('')
const password = ref('')
const email = ref('')
const planetName = ref('')


function registration(){
    const newPlayer = new Player(2, login.value, password.value, email.value, planetName.value, new Necrons())
    localStorage.setItem('player2', JSON.stringify(newPlayer))
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