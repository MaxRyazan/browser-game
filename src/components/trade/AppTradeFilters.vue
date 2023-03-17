<template>
    <div class="trade_filters_item">
        <h2 class="green">Найти предложения</h2>

        <form class="trade_filters_item_search">
            <div class="trade_filters_input">
                <input v-model="store.state.tradeFilterInput" class="trade_filters_input_field title" type="text" autofocus>
            </div>
            <AppDropDownTrade @updateValue="updateValue" :direction_row="true" />
        </form>

    </div>
</template>

<script setup>
import store from "../../store.js";
import AppDropDownTrade from "./AppDropDownTrade.vue";

function updateValue(arg){
    store.state.tradeFilterRace = arg
}
</script>
