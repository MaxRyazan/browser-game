<template>
    <div class="order_list_wrapper">
        <div class="test" v-for="(building, index) in planetStore.state.buildingsInProgressNow" :key="index">
            <div>{{building.building.name}}</div>
            <div>Построится через: {{ (building.timeWhereDone - Date.now()) / 1000 }}</div>
        </div>
    </div>
</template>

<script setup>
import planetStore from "../../store_modules/planetStore.js";
import {onUnmounted} from "vue";
import tradeStore from "../../store_modules/tradeStore.js";
const interval = setInterval(timer, 1000)

function timer() {
    const dateNow = Date.now()
    for(let i = 0; i < planetStore.state.buildingsInProgressNow.length; i++){
        planetStore.state.buildingsInProgressNow[i].timeWhereDone = planetStore.state.buildingsInProgressNow[i].timeWhereDone - 1000
        if(planetStore.state.buildingsInProgressNow[i].timeWhereDone - dateNow <= 0) {
            clearInterval(interval)
            tradeStore.state.currentPlanet.buildings.push(planetStore.state.buildingsInProgressNow[i].building)
            planetStore.state.buildingsInProgressNow.splice(i, 1)
            planetStore.commit('checkThatColonyExists')
        }
    }
}


onUnmounted(() => {
    clearInterval(interval)
})


</script>
