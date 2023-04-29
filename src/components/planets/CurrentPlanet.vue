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
import {onMounted, onUnmounted, watch} from "vue";
import planetStore from "../../store_modules/planetStore.js";
import AppBuildingsMenu from "./AppBuildingsMenu.vue";
import AppPlanetStorageView from "./AppPlanetStorageView.vue";
import AppPlanetNavigationButtons from "./AppPlanetNavigationButtons.vue";
import CurrentPlanetDescription from "./CurrentPlanetDescription.vue";
import AppCurrentInBuild from "./AppCurrentInBuild.vue";
import tradeStore from "../../store_modules/tradeStore.js";
import variables from "../../variables.js";
import helpers from "../../js/planets/helpers.js";

onMounted(() => {
    planetStore.commit('checkThatColonyExists')
    planetStore.commit('calculateMaxCapacityOfStorage')
    planetStore.commit('calculateWeightOfAllOnStorage')
    planetStore.commit('checkAccumulationStationsOfCurrentPlanet')
    planetStore.commit('checkWaveStationsOfCurrentPlanet')
    planetStore.commit('recycleCrudeOreToOre')
    planetStore.commit('recycleCrudeMineralOreToMinerals')
    for(let i = 0; i < tradeStore.state.player.playerData.playerPlanets.homeWorld.buildings.length; i ++){
        planetStore.commit('checkThatFuelLoadTimePassed', tradeStore.state.player.playerData.playerPlanets.homeWorld.buildings[i])
    }
    const plants = tradeStore.state.currentPlanet.buildings.filter(b => b.buildingType === variables.buildingTypeMaterials)
    const factories = tradeStore.state.currentPlanet.buildings.filter(b => b.buildingType === variables.buildingTypeModules)
    if(plants.length){
        const randomPlant = plants[0]
        const sub = (Date.now() - randomPlant.timeOfLastProduce) / variables.fiveMinutes
        console.log('materialSub',sub)
        if(sub > 1){
            for(let i = 0; i < sub; i++){
                planetStore.commit('checkReinforcedConcretePlants')
                planetStore.commit('checkOreMineralPlants')
                planetStore.commit('checkPolymerPlants')
                planetStore.commit('checkChemicalComplex')
                planetStore.commit('checkEnrichmentComplex')
            }
            plants.forEach(p => p.timeOfLastProduce = Date.now())
        }
        planetStore.commit('savePlayerToLocalStorage')
    }
    if(factories.length){
        const randomPlant = factories[0]
        console.log(randomPlant)
        const sub = (Date.now() - randomPlant.timeOfLastProduce) / variables.fiveMinutes
        console.log('modulesSub',sub)
        if(sub > 1){
            for(let i = 0; i < sub; i++){
                planetStore.commit('checkModulesQueue')
                factories.forEach(p => p.timeOfLastProduce = Date.now())
            }
        }
        planetStore.commit('savePlayerToLocalStorage')
    }
})

const modulesInProgress = tradeStore.state.currentPlanet.modulesInCreationNow
const interval = setInterval(() => {
    console.log('start interval')
    for(let i = 0; i < modulesInProgress.length; i++){
        if(modulesInProgress[i].module.willBeCreatedAt <= Date.now() && modulesInProgress[i].amount > 0){
            modulesInProgress[i].amount -= 1
            modulesInProgress[i].module.willBeCreatedAt = Date.now() + variables.fiveMinutes
            helpers.addModuleToStorage(modulesInProgress[i].module)
        }
        if(modulesInProgress[i].amount <= 0){
            modulesInProgress.splice(i, 1)
        }
    }
// }, variables.oneMinute + 1000)
}, 10100)

onUnmounted(() => {
    clearInterval(interval)
})
</script>