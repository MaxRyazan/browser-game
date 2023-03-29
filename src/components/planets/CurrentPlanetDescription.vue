<template>
    <div class="planet_icon">
        <img src="../../assets/images/home_planetN.jpg" alt="">
    </div>
    <div class="planet_data_name">
        <div class="planet_data_name">Планета: {{currentPlanet.name}}</div>
        <div class="planet_data_name link" @click="planetStore.commit('toggleVision', 'planetarySystem')">
            {{currentPlanet.planetarySystem.name}}
        </div>
        <div class="planet_data_name">Орбита: {{currentPlanet.orbit}}</div>
        <div class="planet_data_name">Атмосфера: {{atmosphere}}</div>
        <div class="planet_data_name">Точек застройки: {{busyBuildingPoints}} / {{currentPlanet.building_points}}</div>
        <div class="planet_data_name"> Склад: {{massOfModules}} / {{storeAll}}</div>
        <div class="planet_data_name border_top"> Население всего: {{ peopleAll }}</div>
        <div class="planet_data_name"> Минимальное: {{peoplesNeedToFunctionality}}</div>
        <div class="planet_data_name border_top"> Энергия всего: {{ energyAll }}</div>
        <div class="planet_data_name "> Минимальная: {{ energyNeedToFunctionality }}</div>
    </div>
</template>
<script setup>
import {computed} from "vue";
import tradeStore from "../../store_modules/tradeStore.js";
import planetStore from "../../store_modules/planetStore.js";

const atmosphere = computed(() => {
    return tradeStore.state.currentPlanet.atmosphere ? 'Есть': 'Нет'
})

const busyBuildingPoints = computed(() => {
    let buildingsCount = 0;
    let buildingInProgress = planetStore.state.buildingsInProgressNow.length;
    for(let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i ++){
        buildingsCount += tradeStore.state.currentPlanet.buildings[i].amount
    }
    return buildingsCount + buildingInProgress
})

const peoplesNeedToFunctionality = computed(() => {
    let peoples = 0
    for(let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i++){
        peoples = peoples + tradeStore.state.currentPlanet.buildings[i].peopleNeedToFunctionality * tradeStore.state.currentPlanet.buildings[i].amount
    }
    return peoples
})

const peopleAll = computed(() => {
    let peoples = 0
    for(let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i++){
        peoples = peoples + tradeStore.state.currentPlanet.buildings[i].addPeopleToPlanet * tradeStore.state.currentPlanet.buildings[i].amount
    }
    return peoples
})

const energyNeedToFunctionality = computed(() => {
    let energy = 0
    for(let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i++){
        energy = energy + tradeStore.state.currentPlanet.buildings[i].energyNeedToFunctionality * tradeStore.state.currentPlanet.buildings[i].amount
    }
    return energy
})

const energyAll = computed(() => {
    const buildings = tradeStore.state.currentPlanet.buildings
    let energy = 0
    if(planetStore.state.isColonyCreated){
        energy+=10
    }
    for(let i = 0; i < buildings.length; i++){
        if(buildings[i].buildingType === 2 && buildings[i].isFuelLoaded){
            energy = energy + buildings[i].addEnergyToPlanet * buildings[i].amount
        }
    }
    return energy
})

const storeAll = computed(() => {
    let store = 2000
    for(let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i++){
        store = tradeStore.state.currentPlanet.storage.maxCapacity + tradeStore.state.currentPlanet.buildings[i].addStoreToPlanet * tradeStore.state.currentPlanet.buildings[i].amount
    }
    return store
})


const currentPlanet = computed(() => {
    return tradeStore.state.currentPlanet
})


const massOfModules = computed(() => {
    let mass = 0
    const store = tradeStore.state.currentPlanet.storage.modules
    for(let i = 0; i < store.length; i ++){
        const count = store[i].amount
        mass += store[i].baseParams.baseMass * count
    }
    return mass
})

</script>