<template>
    <div class="main_wrapper">
        <TheTopNav />
        <TheLeftNav />
        <TheBottomNav />
        <TheHelp v-if="helpStore.state.helpMenu"/>
        <TheTradeView v-model:visible="tradeStore.state.showTrade" />
        <CurrentPlanet v-model:visible="planetStore.state.visibilityPlanetMenu" />
        <TheScience v-model:visible="planetStore.state.visibilityScienceMenu" />
        <TheConstructWindow v-model:visible="planetStore.state.isConstructOpen"/>

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
import CurrentPlanet from './planets/CurrentPlanet.vue'
import ThePlanetarySystem from '../components/planets/ThePlanetarySystem.vue'
import TheHelp from "./help/TheHelp.vue";
import {onMounted} from "vue";
import {Mutations} from '../js/trade/mutations.js'
import TheScience from "@/components/science/TheScience.vue";
import TheConstructWindow from "@/components/construct/TheConstructWindow.vue";
const mutations = new Mutations()

onMounted(() => {
    mutations.removeIdenticalElements()
    planetStore.commit('addTestMaterials')
})
window.addEventListener('keydown', press)
function press(e){
    if(e.key === 'Escape'){
        planetStore.state.visibilityPlanetMenu = false
    }
    if(e.code === 'KeyG'){
        planetStore.state.visibilityPlanetMenu = !planetStore.state.visibilityPlanetMenu
    }
}
</script>
<style lang="scss">
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
  transform: scale(0.1);
}
.fade-enter-active,
.fade-leave-active{
  transition: .4s ease;
}
</style>