<template>
    <div class="trade_filters_item">
        <h2>Выставить на продажу</h2>
        <div class="trade_new_lot">
            <span>Выбрать</span>
            <input type="text" v-model="store.state.tradeNewLotInput" >
        </div>
        <AppDropDownTrade/>
    </div>
</template>
<script setup>
import store from "../../store.js";
import AppDropDownTrade from "./AppDropDownTrade.vue";
</script>
