<template>
    <div class="buildings_infrastructure" v-if="planetStore.state.visibilityResources">

        <AppBuildingCard name="Накопительная станция" picture="planet_window_bg"
                         :name="`Накопительная станция`"
                         :building="checkBuilding('Накопительная станция')"
                         :buildingInfo="showBuildingInfo"
        />
        <AppBuildingCard name="Волновая станция" picture="planet_window_bg"
                         :name="`Волновая станция`"
                         :building="checkBuilding('Волновая станция')"
        />
        <AppBuildingCard name="Очиститель руды" picture="planet_window_bg"
                         :name="`Очиститель руды`"
                         :building="checkBuilding('Очиститель руды')"
        />
        <AppBuildingCard name="Синтезатор минералов" picture="planet_window_bg"
                         :name="`Синтезатор минералов`"
                         :building="checkBuilding('Синтезатор минералов')"
        />

    </div>
</template>
<script setup>
import planetStore from "../../store_modules/planetStore.js";
import AppBuildingCard from "./AppBuildingCard.vue";
import tradeStore from "../../store_modules/tradeStore.js";
import {computed} from "vue";
import helpInfo from "../../helpInfo.js";

function checkBuilding(param){
    return tradeStore.state.currentPlanet.buildings.filter(b => b.name === param)[0]
}

const showBuildingInfo = computed(() => {
    return helpInfo.accumulateStation
})
</script>