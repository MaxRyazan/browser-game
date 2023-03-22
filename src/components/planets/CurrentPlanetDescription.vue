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
        <div class="planet_data_name">Точек застройки: {{currentPlanet.building_points}}</div>
        <div class="planet_data_name"> Склад: {{massOfModules}} / {{currentPlanet.storage.maxCapacity}}</div>
    </div>
</template>
<script setup>
import {computed} from "vue";
import tradeStore from "../../store_modules/tradeStore.js";
import planetStore from "../../store_modules/planetStore.js";

const atmosphere = computed(() => {
    return tradeStore.state.currentPlanet.atmosphere ? 'Есть': 'Нет'
})

const currentPlanet = computed(() => {
    return tradeStore.state.currentPlanet
})

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

</script>