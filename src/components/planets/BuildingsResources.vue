<template>
    <div class="buildings_infrastructure" v-if="planetStore.state.visibilityResources">
        <AppBuildingCard name="Волновая станция" picture="planet_window_bg"/>
        <AppBuildingCard name="Буровая платформа" picture="planet_window_bg"/>
        <AppBuildingCard name="Синтезатор минералов" picture="planet_window_bg"/>
    </div>
</template>
<script setup>
import planetStore from "../../store_modules/planetStore.js";
import AppBuildingCard from "./AppBuildingCard.vue";
</script>