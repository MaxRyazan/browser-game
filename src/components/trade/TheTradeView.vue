<template>
    <Dialog header="*" v-model:visible="tradeStore.state.showTrade" :closable="false" :style="{border: '1px solid white', borderRadius: '12px', width: '730', background: 'black'}">
        <div class="trade_base_wrapper">
            <div class="trade_container">
                <AppTradeLotTitle/>
                <AppTradeLotView/>
            </div>
            <div class="trade_filters_wrapper">
                <div class="trade_filters_inner">
                    <AppTradeNewLot/>
                    <AppTradeFilters/>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script setup>
import AppTradeFilters from "./AppTradeFilters.vue";
import AppTradeNewLot from "./AppTradeNewLot.vue";
import AppTradeLotView from "./AppTradeLotView.vue";
import AppTradeLotTitle from "./AppTradeLotTitle.vue";
import tradeStore from "@/store_modules/tradeStore.js";
import Dialog from "primevue/dialog";
</script>