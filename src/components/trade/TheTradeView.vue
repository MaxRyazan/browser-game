<template>
    <div class="trade_container">
        <AppTradeLotTitle/>
        <AppTradeLotView />
    </div>
    <div class="trade_filters_wrapper">
        <div class="trade_filters_inner">
            <AppTradeNewLot />
            <AppTradeFilters />
        </div>
    </div>
</template>

<script setup>
import AppTradeFilters from "./AppTradeFilters.vue";
import AppTradeNewLot from "./AppTradeNewLot.vue";
import AppTradeLotView from "./AppTradeLotView.vue";
import AppTradeLotTitle from "./AppTradeLotTitle.vue";

</script>