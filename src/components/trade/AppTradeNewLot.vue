<template>
    <div class="trade_filters_item">
        <h2 class="green">Выставить на продажу</h2>
        <div class="trade_new_lot">
            <span class="green">Выбрать</span>
            <input type="text" v-model="store.state.tradeNewLotInput" class="trade_filters_input_field title">
        </div>
        <AppDropDownTrade/>
        <div class="trade_new_lot_choose_module">
            <AppModuleView :modules="all"/>
        </div>
    </div>
</template>
<script setup>
import store from "../../store.js";
import {Mutations} from "../../js/mutations.js";
import AppDropDownTrade from "./AppDropDownTrade.vue";
import AppModuleView from "./AppModuleView.vue";

const mutations = new Mutations()

const playerHomeWorldStorage = mutations.getHomeWorldStorage()

const playerOtherPlanets =  mutations.getOtherPlanetsStorage()

const all = mutations.getAllPlayerModules(playerHomeWorldStorage, playerOtherPlanets)


</script>
