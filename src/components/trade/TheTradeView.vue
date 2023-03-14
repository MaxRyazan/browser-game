<template>
    <div class="trade_container">
        <img src="src/assets/images/trade_background.jpg" alt="" class="trade_background">
        <div class="trade_container_wrapper">
            <div class="trade_container_item title">Планета</div>
            <div class="trade_container_item title race">Наименование</div>
            <div class="trade_container_item title">Мин. партия</div>
            <div class="trade_container_item title">Количество</div>
            <div class="trade_container_item title">Цена за штуку</div>
            <div class="trade_container_item title">Цена всего лота</div>
            <AppIcon :path="iconsPath.close" @click="mutations.toggleTrade()"/>
        </div>
        <div v-for="lot in filteredLots" :key="lot.id" class="trade_container_wrapper">
            <div class="trade_container_item">{{lot.lotFrom}}</div>
            <div class="trade_container_item race" :class="mutations.checkRace(lot.race)">{{lot.name}}</div>
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
    <div class="trade_filters_wrapper">
        <div class="trade_filters_inner">
            <AppTradeNewLot />
            <AppTradeFilters />
        </div>
    </div>
</template>

<script setup>
import {computed} from "vue";

defineEmits(['tradeSearch', 'clearFilter'])
import AppIcon from '../navigation/AppIcon.vue'
import store from "../../store.js";
import iconsPath from "../../iconsPaths.js";
import {Actions} from "../../js/actions.js";
import {Mutations} from "../../js/mutations.js";
import AppTradeFilters from "./AppTradeFilters.vue";
import AppTradeNewLot from "./AppTradeNewLot.vue";

const actions = new Actions()
const mutations = new Mutations()

const filteredLots = computed(() => {
    if (!store.state.tradeFilterInput && !store.state.tradeFilterRace) {
        return store.state.allLots
    }
    if (store.state.tradeFilterRace && !store.state.tradeFilterInput) {
        return store.state.allLots.filter(e => e.race === store.state.tradeFilterRace)
    }
    if(!store.state.tradeFilterRace && store.state.tradeFilterInput) {
        return store.state.allLots.filter(e => e.name.toLowerCase().includes(store.state.tradeFilterInput.toLowerCase()))
    }
    else {
        return store.state.allLots.filter(e => e.race === store.state.tradeFilterRace && e.name.toLowerCase().includes(store.state.tradeFilterInput.toLowerCase()))
    }
})

</script>