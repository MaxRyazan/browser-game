<template>
    <div class="buildings_infrastructure" v-if="planetStore.state.visibilityInfrastructure">
        <AppBuildingCard name="Колония" picture="colony_icon" :name="`Колония`" :building="checkBuilding('Колония')"/>
        <AppBuildingCard name="Колониальный сенат" picture="colonial_senat" v-if="planetStore.state.isColonyCreated"/>
        <AppBuildingCard name="Склад" picture="store" v-if="planetStore.state.isColonyCreated"/>
        <AppBuildingCard name="Административный центр" picture="admin_center" v-if="planetStore.state.isColonyCreated"/>
        <AppBuildingCard name="Строительный центр" picture="building_center" v-if="planetStore.state.isColonyCreated"/>
        <AppBuildingCard name="Медицинский центр" picture="med_center" v-if="planetStore.state.isColonyCreated"/>
        <AppBuildingCard name="Города" picture="planet_window_bg" v-if="planetStore.state.isColonyCreated"/>
        <AppBuildingCard name="Банк" picture="planet_window_bg" v-if="planetStore.state.isColonyCreated"/>
        <AppBuildingCard name="Космопорт" picture="planet_window_bg" v-if="planetStore.state.isColonyCreated"/>
    </div>
</template>
<script setup>
import planetStore from "../../store_modules/planetStore.js";
import AppBuildingCard from "./AppBuildingCard.vue";
import tradeStore from "../../store_modules/tradeStore.js";

function checkBuilding(param){
    return tradeStore.state.currentPlanet.buildings.filter(b=> b.name === param)[0]
}

</script>