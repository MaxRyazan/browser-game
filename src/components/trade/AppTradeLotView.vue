<template>
    <div v-for="lot in mutations.tradeLotsFilter(store.state.tradeFilterRace, store.state.tradeFilterInput, store.state.allLots)" :key="lot.id" class="trade_container_wrapper">
        <div class="trade_container_item">{{lot.lotFrom.login}}</div>
        <div class="trade_container_item race" :class="mutations.checkRace(lot.subject.belongsToRace.name)">{{lot.subject.name}}</div>
        <div class="trade_container_item money_ig_sum">{{lot.minAmount}}</div>
        <div class="trade_container_item money_ig_sum">{{lot.amount}}</div>
        <div class="trade_container_item money_ig_sum">
            {{lot.pricePerUnit}}
            <span class="money_ig_currency">IG</span>
        </div>
        <div class="trade_container_item money_ig_sum">
            {{lot.pricePerLot}}
            <span class="money_ig_currency">IG</span>
        </div>
        <AppIcon :path="iconsPath.buy"  @click="openConfirmWindow(lot)"/>
    </div>
        <AppConfirmWindow  v-if="store.state.confirmWindow === true"/>
</template>

<script setup>
import AppIcon from '../navigation/AppIcon.vue'
import store from "../../store.js";
import iconsPath from "../../iconsPaths.js";
import {Actions} from "../../js/actions.js";
import {Mutations} from "../../js/mutations.js";
import AppConfirmWindow from "./AppConfirmWindow.vue";
const mutations = new Mutations()

function openConfirmWindow(lot){
    if(store.state.confirmWindow){
        store.state.confirmWindow = false
        store.state.confirmWindowInput = ''
    } else {
        store.state.confirmWindow = true
    }
    store.state.buyingLot.lot = lot
}
</script>
