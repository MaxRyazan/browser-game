<template>
    <div class="buildings_infrastructure" v-if="planetStore.state.visibilityResources">
        <AppBuildingCard name="Буровая платформа" picture="planet_window_bg" :name="`Буровая платформа`" :building="checkBuilding('Буровая платформа')"/>
        <AppBuildingCard name="Волновая станция" picture="planet_window_bg" :name="`Волновая станция`" :building="checkBuilding('Волновая станция')"/>
        <AppBuildingCard name="Очиститель руды" picture="planet_window_bg" :name="`Очиститель руды`" :building="checkBuilding('Очиститель руды')"/>
        <AppBuildingCard name="Синтезатор минералов" picture="planet_window_bg" :name="`Синтезатор минералов`" :building="checkBuilding('Синтезатор минералов')"/>
    </div>
</template>
<script setup>
import planetStore from "../../store_modules/planetStore.js";
import AppBuildingCard from "./AppBuildingCard.vue";
import tradeStore from "../../store_modules/tradeStore.js";

function checkBuilding(param){
    return tradeStore.state.currentPlanet.buildings.filter(b => b.name === param)[0]
}
</script>