<template>
    <div class="buildings_infrastructure" v-if="planetStore.state.visibilityComponents">
        <AppBuildingCard name="Цех сборки двигателей" picture="planet_window_bg"
                        :name="`Цех сборки двигателей`"
                        :building="checkBuilding('Цех сборки двигателей')"
        />
        <AppBuildingCard name="Цех сборки реакторов" picture="planet_window_bg"
                         :name="`Цех сборки реакторов`"
                         :building="checkBuilding('Цех сборки реакторов')"
        />
        <AppBuildingCard name="Цех сборки орудийных систем" picture="planet_window_bg"
                         :name="`Цех сборки орудийных систем`"
                         :building="checkBuilding('Цех сборки орудийных систем')"
        />
        <AppBuildingCard name="Цех сборки защитных компонентов" picture="planet_window_bg"
                         :name="`Цех сборки защитных компонентов`"
                         :building="checkBuilding('Цех сборки защитных компонентов')"
        />
        <AppBuildingCard name="Цех сборки добывающих модулей" picture="planet_window_bg"
                         :name="`Цех сборки добывающих модулей`"
                         :building="checkBuilding('Цех сборки добывающих модулей')"
        />
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