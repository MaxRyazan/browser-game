<template>
    <div class="trade_container">
        <div class="trade_container_wrapper">
            <div class="trade_container_item title">Планета</div>
            <div class="trade_container_item title">Наименование</div>
            <div class="trade_container_item title">Мин. партия</div>
            <div class="trade_container_item title">Количество</div>
            <div class="trade_container_item title">Цена за штуку</div>
            <div class="trade_container_item title">Цена всего лота</div>
            <AppIcon :path="iconsPath.close" @click="mutations.toggleTrade()"/>
        </div>
        <div v-for="lot in store.state.allLots" :key="lot.id" class="trade_container_wrapper">
            <div class="trade_container_item">{{lot.lotFrom}}</div>
            <div class="trade_container_item" :class="mutations.checkRace(lot.race)">{{lot.name}} ур. {{lot.lvl}}</div>
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
            <AppIcon :path="iconsPath.buy"  @click="actions.buyItem(lot)"/>
        </div>
    </div>
</template>

<script setup>
import AppIcon from '../navigation/AppIcon.vue'
import store from "../../store.js";
import iconsPath from "../../iconsPaths.js";
import {Actions} from "../../js/actions.js";
import {Mutations} from "../../js/mutations.js";
const actions = new Actions()
const mutations = new Mutations()


</script>
<style scoped>

</style>