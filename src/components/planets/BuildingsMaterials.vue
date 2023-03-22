<template>
    <div class="buildings_infrastructure" v-if="planetStore.state.visibilityMaterials">
        <AppBuildingCard name="Железобетонный завод" picture="planet_window_bg"/>
        <AppBuildingCard name="Рудо-минеральный завод" picture="planet_window_bg"/>
        <AppBuildingCard name="Полимерный завод" picture="planet_window_bg"/>
        <AppBuildingCard name="Химический завод" picture="planet_window_bg"/>
        <AppBuildingCard name="Обогатительный комплекс" picture="planet_window_bg"/>
    </div>
</template>
<script setup>
import planetStore from "../../store_modules/planetStore.js";
import AppBuildingCard from "./AppBuildingCard.vue";
</script>