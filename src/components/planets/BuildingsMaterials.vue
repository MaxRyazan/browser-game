<template>
    <div class="buildings_infrastructure" v-if="planetStore.state.visibilityMaterials">
        <AppBuildingCard name="Железобетонный завод"
                         picture="reinf_conc_plant"
                        :name="`Железобетонный завод`"
                        :building="checkBuilding('Железобетонный завод')"
        />
        <AppBuildingCard name="Рудо-минеральный завод"
                         picture="ore_min_plant"
                         :name="`Рудо-минеральный завод`"
                         :building="checkBuilding('Рудо-минеральный завод')"
        />
        <AppBuildingCard name="Полимерный завод"
                         picture="polymers_plant"
                         :name="`Полимерный завод`"
                         :building="checkBuilding('Полимерный завод')"
        />
        <AppBuildingCard name="Химический комплекс"
                         picture="chemical_factory"
                         :name="`Химический комплекс`"
                         :building="checkBuilding('Химический комплекс')"
        />
        <AppBuildingCard name="Обогатительный комплекс"
                         picture="enrichment_factory"
                         :name="`Обогатительный комплекс`"
                         :building="checkBuilding('Обогатительный комплекс')"
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