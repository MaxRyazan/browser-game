<template>
    <div class="main_wrapper">
        <TheTopNav />
        <TheLeftNav />
        <TheBottomNav />
        <TheTradeView v-if="store.state.showTrade"/>
        <ThePlanets v-if="planetStore.state.visibilityPlanetMenu"/>
    </div>
</template>

<script setup>
import TheTopNav from '../components/navigation/TheTopNav.vue'
import TheLeftNav from '../components/navigation/TheLeftNav.vue'
import TheBottomNav from '../components/navigation/TheBottomNav.vue'
import TheTradeView from "./trade/TheTradeView.vue";
import store from "../store.js";
import planetStore from "../store_modules/planetStore.js";
import ThePlanets from '../components/planets/ThePlanets.vue'
</script>
