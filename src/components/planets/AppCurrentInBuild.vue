<template>
    <div class="order_list_wrapper">
        <div class="building_in_progress_wrapper" v-for="(building, index) in planetStore.state.buildingsInProgressNow" :key="index">
            <div class="building_in_progress_wrapper-name">
                <span>{{building.building.name}}</span>
            </div>
            <div class="building_in_progress_wrapper-timer">
                <strong>Построится : </strong>
                <span>{{ timer(building) }}</span>
            </div>
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

    const time = new Date(param.timeWhereDone)
    let month =  time.getMonth() + 1
    const day = time.getDate()
    const hour = time.getHours()
    const min = time.getMinutes()

    switch (month) {
        case 1 :  month = 'января'
            break;
        case 2 :  month = 'февраля'
            break;
        case 3 :  month = 'марта'
            break;
        case 4 :  month = 'апреля'
            break;
        case 5 :  month = 'мая'
            break;
        case 6 :  month = 'июня'
            break;
        case 7 :  month = 'июля'
            break;
        case 8 :  month = 'августа'
            break;
        case 9 :  month = 'сентября'
            break;
        case 10 :  month = 'октября'
            break;
        case 11 :  month = 'ноября'
            break;
        case 12 :  month = 'декабря'
            break;
    }
    const minutes = min  < 10 ? '0' + min : min

    return day + ' ' + month + ' в ' + hour + ":" + minutes

}


</script>
