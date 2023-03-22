<template>
    <div class="buildings_infrastructure" v-if="planetStore.state.visibilityComponents">
        <AppBuildingCard name="Цех сборки двигателей" picture="planet_window_bg"/>
        <AppBuildingCard name="Цех сборки реакторов" picture="planet_window_bg"/>
        <AppBuildingCard name="Цех сборки орудийных систем" picture="planet_window_bg"/>
        <AppBuildingCard name="Цех сборки защитных компонентов" picture="planet_window_bg"/>
        <AppBuildingCard name="Цех сборки добывающих модулей" picture="planet_window_bg"/>
    </div>
</template>
<script setup>
import planetStore from "../../store_modules/planetStore.js";
import AppBuildingCard from "./AppBuildingCard.vue";
</script>