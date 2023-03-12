<template>
        <TheTopNav />
        <TheLeftNav />
        <TheBottomNav />

        <TheTradeView v-if="store.state.showTrade"/>
</template>

<script setup>
import TheTopNav from '../components/navigation/TheTopNav.vue'
import TheLeftNav from '../components/navigation/TheLeftNav.vue'
import TheBottomNav from '../components/navigation/TheBottomNav.vue'
import TheTradeView from "./trade/TheTradeView.vue";
import store from "../store.js";
</script>
