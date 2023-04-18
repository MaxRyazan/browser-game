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
import variables from "../../variables.js";

onMounted(() => {
    planetStore.commit('checkThatColonyExists')
    planetStore.commit('calculateMaxCapacityOfStorage')
    planetStore.commit('calculateWeightOfAllOnStorage')
    planetStore.commit('checkAccumulationStationsOfCurrentPlanet')
    planetStore.commit('checkWaveStationsOfCurrentPlanet')
    planetStore.commit('recycleCrudeOreToOre')
    planetStore.commit('recycleCrudeMineralOreToMinerals')
    // planetStore.commit('checkReinforcedConcretePlants')
    // planetStore.commit('checkOreMineralPlants')
    // planetStore.commit('checkPolymerPlants')
    // planetStore.commit('checkChemicalComplex')
    // planetStore.commit('checkEnrichmentComplex')
    // planetStore.commit('checkThatPeopleEnough')
    for(let i = 0; i < tradeStore.state.player.playerData.playerPlanets.homeWorld.buildings.length; i ++){
        planetStore.commit('checkThatFuelLoadTimePassed', tradeStore.state.player.playerData.playerPlanets.homeWorld.buildings[i])
    }

    const plants = tradeStore.state.currentPlanet.buildings.filter(b => b.buildingType === variables.buildingTypeMaterials)
    if(plants.length){
        console.log(new Date(plants[0].timeOfLastProduce))
        const randomPlant = plants[0]
        const sub = (Date.now() - randomPlant.timeOfLastProduce) / variables.fiveMinutes
        for(let i = 0; i < sub; i++){
            planetStore.commit('checkReinforcedConcretePlants')
            planetStore.commit('checkOreMineralPlants')
            planetStore.commit('checkPolymerPlants')
            planetStore.commit('checkChemicalComplex')
            planetStore.commit('checkEnrichmentComplex')
        }
        plants.forEach(p => p.timeOfLastProduce = Date.now())
        planetStore.commit('savePlayerToLocalStorage')
    }
})

</script>