<template>
    <div class="order_list_wrapper">
        <div class="test" v-for="(building, index) in planetStore.state.buildingsInProgressNow" :key="index">
            <div>{{building.building.name}}</div>
            <div>Построится в: {{ timer(building) }}</div>
        </div>
    </div>
</template>

<script setup>
import planetStore from "../../store_modules/planetStore.js";
import tradeStore from "../../store_modules/tradeStore.js";



function timer(param) {
    const dd = param.timeWhereDone - Date.now()
    setTimeout(() => {
        param.timeWhereDone = 0
        for(let i = 0; i < planetStore.state.buildingsInProgressNow.length; i++) {
            if(planetStore.state.buildingsInProgressNow[i].timeWhereDone === param.timeWhereDone){
                const existsBuilding = tradeStore.state.currentPlanet.buildings.filter(b => b.id === planetStore.state.buildingsInProgressNow[i].building.id)[0]
                if(existsBuilding){
                    existsBuilding.amount += 1
                } else {
                    tradeStore.state.currentPlanet.buildings.push(planetStore.state.buildingsInProgressNow[i].building)
                }
                planetStore.state.buildingsInProgressNow.splice(i, 1)
            }
        }
    planetStore.commit('checkThatColonyExists')
    }, dd)
    return param.timeWhereDone
}


</script>
