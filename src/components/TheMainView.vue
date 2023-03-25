<template>
    <div class="main_wrapper">
        <TheTopNav />
        <TheLeftNav />
        <TheBottomNav />
        <TheHelp v-if="helpStore.state.helpMenu"/>
        <TheTradeView v-if="tradeStore.state.showTrade"/>
        <ThePlanets v-if="planetStore.state.visibilityPlanetMenu"/>
        <ThePlanetarySystem v-if="planetStore.state.visibilityPlanetarySystem" />
    </div>
</template>

<script setup>
import TheTopNav from '../components/navigation/TheTopNav.vue'
import TheLeftNav from '../components/navigation/TheLeftNav.vue'
import TheBottomNav from '../components/navigation/TheBottomNav.vue'
import TheTradeView from "./trade/TheTradeView.vue";
import tradeStore from "../store_modules/tradeStore.js";
import planetStore from "../store_modules/planetStore.js";
import helpStore from "../store_modules/helpStore.js";
import ThePlanets from './planets/CurrentPlanet.vue'
import ThePlanetarySystem from '../components/planets/ThePlanetarySystem.vue'
import TheHelp from "./help/TheHelp.vue";

</script>
