<template>
    <form class="confirm_wrapper" @submit.prevent="">
        <div class="confirm_inner">
            <input v-model="store.state.confirmWindowInput" class="confirm_input" type="number" name="amount">
            <label class="confirm_text" for="amount">штук</label>
            <button class="confirm_ok_btn">Ок</button>
            <button class="confirm_close_btn" @click="mutations.closeConfirmWindow">X</button>
        </div>
    </form>
</template>

<script setup>
import {Mutations} from "../../js/mutations.js";
import store from "../../store.js";
const mutations = new Mutations()
</script>
