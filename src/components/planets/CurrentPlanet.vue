<template>
    <div class="planet_main_wrapper">
        <div class="planet_item planet_list">
            <div class="planet_icon">
                <img src="../../assets/images/home_planetN.jpg" alt="">
            </div>
            <div class="planet_data_name">
                <div class="planet_data_name">Планета: {{playerPlanets.name}}</div>
                <div class="planet_data_name link" @click="planetStore.commit('toggleVision', 'planetarySystem')">{{playerPlanets.planetarySystem.name}}</div>
                <div class="planet_data_name">Орбита: {{playerPlanets.orbit}}</div>
                <div class="planet_data_name">Атмосфера: {{atmosphere}}</div>
                <div class="planet_data_name">Точек застройки: {{playerPlanets.building_points}}</div>
                <div class="planet_data_name">
                    Склад:
                    {{massOfModules}} /
                    {{playerPlanets.storage.maxCapacity}}
                </div>
            </div>
        </div>
        <div class="planet_item">
            <AppPlanetNavigationButtons />
            <AppOrderList />
            <AppListOfBuildings />
            <AppPlanetStorageView v-if="planetStore.state.visibilityStorage" />
        </div>
    </div>
</template>

<script setup>
import tradeStore from "../../store_modules/tradeStore.js";
import planetStore from "../../store_modules/planetStore.js";
import AppListOfBuildings from "./AppListOfBuildings.vue";
import AppPlanetStorageView from "./AppPlanetStorageView.vue";
import AppOrderList from "./AppOrderList.vue";
import {computed} from "vue";
import AppPlanetNavigationButtons from "./AppPlanetNavigationButtons.vue";


//TODO реализовать добавление купленных модулей на склад, для подсчета массы на складе
const massOfModules = computed(() => {
    let mass = 0
    const store = tradeStore.state.currentPlanet.storage.modules
    for(let i = 0; i < store.length; i ++){
        const count = store[i].amount
        mass += store[i].baseParams.baseMass * count
    }
    return mass
})

const atmosphere = computed(() => {
   return tradeStore.state.currentPlanet.atmosphere ? 'Есть': 'Нет'
})

const playerPlanets = computed(() => {
    return tradeStore.state.currentPlanet
})
</script>