<template>
    <div class="buildings_infrastructure" v-if="planetStore.state.visibilityEnergy">
        <AppBuildingCard name="Солнечная станция"
                         picture="solar_station"
                         :building="checkBuilding('Солнечная станция')"
        />
        <AppBuildingCard name="Химическая электростанция"
                         picture="chemical_station"
                         :building="checkBuilding('Химическая электростанция')"
        />
        <AppBuildingCard name="Ядерная электростанция"
                         picture="nuclear_station"
                         :building="checkBuilding('Ядерная электростанция')"
        />
        <AppBuildingCard name="Расщепитель Альтах"
                         picture="altah_station"
                         :building="checkBuilding('Расщепитель Альтах')"
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