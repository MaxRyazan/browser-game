<template>
    <form class="confirm_wrapper" @submit.prevent="actions.buyItem()">
        <div class="confirm_inner">
            <input v-model="store.state.confirmWindowInput" class="confirm_input" type="number" name="amount">
            <label class="confirm_text green" for="amount">Количество</label>
            <button class="confirm_ok_btn">Ок</button>
            <button type="submit" class="confirm_close_btn" @click="mutations.closeConfirmWindow">X</button>
        </div>
    </form>
</template>

<script setup>
import {Mutations} from "../../js/trade/mutations.js";
import store from "../../store_modules/tradeStore.js";
import {Actions} from "../../js/trade/actions.js";
const mutations = new Mutations()
const actions = new Actions()
</script>
