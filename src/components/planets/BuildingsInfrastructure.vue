<template>
    <div class="buildings_infrastructure" v-if="planetStore.state.visibilityInfrastructure">
        <AppBuildingCard name="Колония" picture="colony_icon"
                         :name="`Колония`"
                         :building="checkBuilding('Колония')"
        />
        <AppBuildingCard name="Колониальный сенат"
                         picture="colonial_senat"
                         v-if="planetStore.state.isColonyCreated"
                         :building="checkBuilding('Колониальный сенат')"
        />
        <AppBuildingCard name="Склад"
                         picture="store"
                         v-if="planetStore.state.isColonyCreated"
                         :building="checkBuilding('Склад')"
        />
        <AppBuildingCard name="Административный центр"
                         picture="admin_center"
                         v-if="planetStore.state.isColonyCreated"
                         :building="checkBuilding('Административный центр')"
        />
        <AppBuildingCard name="Строительный центр"
                         picture="building_center"
                         v-if="planetStore.state.isColonyCreated"
                         :building="checkBuilding('СтройЦентр')"
        />
        <AppBuildingCard name="Медицинский центр"
                         picture="med_center"
                         v-if="planetStore.state.isColonyCreated"
                         :building="checkBuilding('Медицинский центр')"
        />
        <AppBuildingCard name="Небоскрёб"
                         picture="skyscraper"
                         v-if="planetStore.state.isColonyCreated"
                         :building="checkBuilding('Небоскрёб')"
        />
        <AppBuildingCard name="Банк"
                         picture="planet_window_bg"
                         v-if="planetStore.state.isColonyCreated"
                         :building="checkBuilding('Банк')"
        />
        <AppBuildingCard name="Космопорт"
                         picture="planet_window_bg"
                         v-if="planetStore.state.isColonyCreated"
                         :building="checkBuilding('Космопорт')"
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