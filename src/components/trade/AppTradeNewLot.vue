<template>
    <div class="trade_filters_item  double_width">
        <h2 class="green">Выставить на продажу</h2>
        <div class="direction_row">
            <div class="trade_filters_input_wrapper">
                <div class="new_lot_inputs">
                    <div class="direction_column">
                        <input type="number" v-model="store.state.newLotMinUnit" placeholder="мин.партия" class="new_lot_input">
                        <input type="number" v-model="store.state.newLotCount" placeholder="всего" class="new_lot_input">
                    </div>
                    <input type="number" v-model="store.state.newLotPrice" placeholder="цена" class="new_lot_input">
                    <button class="new_lot_button" @click="actions.createNewLot">Продать</button>
                </div>
                <input type="text" v-model="store.state.newLotFilterInput" class="trade_filters_input_field title">
                <AppDropDownTrade @updateValue="updateValue" :direction_row="true"/>
            </div>
            <div class="trade_new_lot_choose_module">
                <AppModuleView/>
            </div>
        </div>
    </div>
</template>
<script setup>
import store from "../../store_modules/tradeStore.js";
import AppDropDownTrade from "./AppDropDownTrade.vue";
import AppModuleView from "./AppModuleView.vue";
import {Actions} from "../../js/trade/actions.js";
const actions = new Actions()
function updateValue(arg) {
    store.state.newLotFilterRace = arg
}
</script>
