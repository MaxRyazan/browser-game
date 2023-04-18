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
        <div class="planet_data_name" :class="`${allWeight >= storeAll ? 'red': ''}`"> Склад: {{allWeight}} / {{storeAll}}</div>
        <div class="planet_data_name border_top"> Население всего: {{ peopleAll }}</div>
        <div class="planet_data_name" :class="`${peoplesNeedToFunctionality >= peopleAll ? 'red': ''}`"> Минимальное: {{peoplesNeedToFunctionality}}</div>
        <div class="planet_data_name border_top"> Энергия всего: {{ energyAll }}</div>
        <div class="planet_data_name" :class="`${energyNeedToFunctionality >= energyAll ? 'red': ''}`"> Минимальная: {{ energyNeedToFunctionality }}</div>
    </div>
</template>
<script setup>
import {computed, onMounted} from "vue";
import tradeStore from "../../store_modules/tradeStore.js";
import planetStore from "../../store_modules/planetStore.js";
onMounted(() => {
    planetStore.commit('checkThatPeopleEnough')
    const buildings =  tradeStore.state.currentPlanet.buildings
    for(let i = 0; i <  buildings.length; i++){
        buildings[i].buildingEffectiveCoefficient = tradeStore.state.currentPlanet.buildingsEffectiveCoefficient
    }
})
const buildings = tradeStore.state.currentPlanet.buildings

const atmosphere = computed(() => {
    return tradeStore.state.currentPlanet.atmosphere ? 'Есть': 'Нет'
})

const busyBuildingPoints = computed(() => {
    let buildingsCount = 0;
    let buildingInProgress = planetStore.state.buildingsInProgressNow.length;
    for(let i = 0; i < buildings.length; i ++){
        buildingsCount += buildings[i].amount
    }
    return buildingsCount + buildingInProgress
})

const peoplesNeedToFunctionality = computed(() => {
    let peoples = 0
    for(let i = 0; i < buildings.length; i++){
        peoples = peoples + buildings[i].peopleNeedToFunctionality * buildings[i].amount
    }
    return peoples
})

const peopleAll = computed(() => {
    let peoples = 0
    for(let i = 0; i < buildings.length; i++){
        peoples = peoples + buildings[i].addPeopleToPlanet * buildings[i].amount *  tradeStore.state.currentPlanet.buildingsEffectiveCoefficient
    }
    return peoples.toFixed(0)
})

const energyNeedToFunctionality = computed(() => {
    let energy = 0
    for(let i = 0; i < buildings.length; i++){
        energy = energy + buildings[i].energyNeedToFunctionality * buildings[i].amount
    }
    return energy
})

const energyAll = computed(() => {
    let energy = 0
    if(planetStore.state.isColonyCreated){
        energy+=10
    }
    for(let i = 0; i < buildings.length; i++){
        if(buildings[i].buildingType === 2 && buildings[i].isFuelLoaded){
            energy = energy + buildings[i].addEnergyToPlanet * buildings[i].amount *  tradeStore.state.currentPlanet.buildingsEffectiveCoefficient
        }
    }
    return  energy.toFixed(2)
})

const storeAll = computed(() => {
    let store = 2000
    for(let i = 0; i < buildings.length; i++){
        store += buildings[i].addStoreToPlanet * buildings[i].amount *  tradeStore.state.currentPlanet.buildingsEffectiveCoefficient
    }
    return store
})


const currentPlanet = computed(() => {
    return tradeStore.state.currentPlanet
})

const allWeight = computed(() => {
    return Number(tradeStore.state.currentPlanet.allStorageUnitsMass)
})
</script>