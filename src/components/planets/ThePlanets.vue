<template>
    <div class="planet_main_wrapper">
        <div class="planet_item planet_list">
            <div class="planet_icon">
                <img src="../../assets/images/home_planetN.jpg" alt="">
            </div>
            <div class="planet_data_name">
                <div class="planet_data_name">Планета: {{playerPlanets.homeWorld.name}}</div>
                <div class="planet_data_name link" @click="planetStore.commit('togglePlanetarySystemVision')">{{playerPlanets.homeWorld.planetarySystem.name}}</div>
                <div class="planet_data_name">Орбита: {{playerPlanets.homeWorld.orbit}}</div>
                <div class="planet_data_name">Атмосфера: {{atmosphere}}</div>
                <div class="planet_data_name">Точек застройки: {{playerPlanets.homeWorld.building_points}}</div>
                <div class="planet_data_name">
                    Склад:
                    {{massOfModules}} /
                    {{playerPlanets.homeWorld.storage.maxCapacity}}
                </div>
            </div>
        </div>
        <div class="planet_item">
            <div class="planet_navigation">
                <AppMiniButton :name="`Склад`" />
                <AppMiniButton :name="`Строительство`" />
                <AppMiniButton :name="`Управление`" />
                <AppMiniButton :name="`Орбитальный док`" />
            </div>
            <AppOrderList />
            <AppListOfBuildings />
        </div>
    </div>
</template>

<script setup>
import tradeStore from "../../store_modules/tradeStore.js";
import planetStore from "../../store_modules/planetStore.js";
import AppMiniButton from "../mini/AppMiniButton.vue";
import AppListOfBuildings from "./AppListOfBuildings.vue";
import AppOrderList from "./AppOrderList.vue";
import {computed} from "vue";

const massOfModules = computed(() => {
    let mass = 0
    const store = tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.modules
    for(let i = 0; i < store.length; i ++){
        const count = store[i].amount
        mass += store[i].baseParams.baseMass * count
    }
    return mass
})

const atmosphere = computed(() => {
   return tradeStore.state.player.playerData.playerPlanets.homeWorld.atmosphere ? 'Есть': 'Нет'
})

const playerPlanets = computed(() => {
    return tradeStore.state.player.playerData.playerPlanets
})
</script>