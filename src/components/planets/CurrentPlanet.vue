<template>
    <div class="planet_main_wrapper">
        <div class="planet_item planet_list">
            <CurrentPlanetDescription/>
        </div>
        <div class="planet_item">
            <AppPlanetNavigationButtons />
            <AppCurrentInBuild v-if="planetStore.state.visibilityBuildingsInProgress" />
            <AppPlanetStorageView v-if="planetStore.state.visibilityStorage" />
            <AppBuildingsMenu />
        </div>
    </div>
</template>

<script setup>
import {onMounted} from "vue";
import planetStore from "../../store_modules/planetStore.js";
import AppBuildingsMenu from "./AppBuildingsMenu.vue";
import AppPlanetStorageView from "./AppPlanetStorageView.vue";
import AppPlanetNavigationButtons from "./AppPlanetNavigationButtons.vue";
import CurrentPlanetDescription from "./CurrentPlanetDescription.vue";
import AppCurrentInBuild from "./AppCurrentInBuild.vue";
import tradeStore from "../../store_modules/tradeStore.js";

onMounted(() => {
    planetStore.commit('checkThatColonyExists')
    planetStore.commit('calculateMaxCapacityOfStorage')
    planetStore.commit('calculateWeightOfAllOnStorage')
    planetStore.commit('checkAccumulationStationsOfCurrentPlanet')
    planetStore.commit('checkWaveStationsOfCurrentPlanet')
    // planetStore.commit('checkThatPeopleEnough')
    for(let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i ++){
        planetStore.commit('checkThatFuelLoadTimePassed', tradeStore.state.currentPlanet.buildings[i])
    }
})

</script>