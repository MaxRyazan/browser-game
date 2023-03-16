<template>
    <div class="trade_filters_item">
        <h2 class="green">Выставить на продажу</h2>
        <div class="trade_new_lot">
            <span class="green">Выбрать</span>
            <input type="text" v-model="store.state.newLotFilterInput" class="trade_filters_input_field title">
        </div>
        <AppDropDownTrade @updateValue="updateValue"/>
        <div class="trade_new_lot_choose_module">
            <AppModuleView/>
        </div>
    </div>
</template>
<script setup>
import store from "../../store.js";
import {Mutations} from "../../js/mutations.js";
import AppDropDownTrade from "./AppDropDownTrade.vue";
import AppModuleView from "./AppModuleView.vue";

function updateValue(arg){
    store.state.newLotFilterRace = arg
}

</script>
