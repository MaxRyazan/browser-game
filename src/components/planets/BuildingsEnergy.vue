<template>
    <div class="buildings_infrastructure" v-if="planetStore.state.visibilityEnergy">
        <AppBuildingCard name="Солнечная станция" picture="planet_window_bg" :building="checkBuilding('Солнечная станция')"/>
        <AppBuildingCard name="Химическая электростанция" picture="planet_window_bg" :building="checkBuilding('Химическая электростанция')"/>
        <AppBuildingCard name="Ядерная электростанция" picture="planet_window_bg" :building="checkBuilding('Ядерная электростанция')"/>
        <AppBuildingCard name="Расщепитель Альтах" picture="planet_window_bg" :building="checkBuilding('Расщепитель Альтах')"/>
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