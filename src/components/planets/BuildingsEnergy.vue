<template>
    <div class="buildings_infrastructure" v-if="planetStore.state.visibilityEnergy">
        <AppBuildingCard name="Солнечная станция" picture="planet_window_bg"/>
        <AppBuildingCard name="Химическая электростанция" picture="planet_window_bg"/>
        <AppBuildingCard name="Ядерная электростанция" picture="planet_window_bg"/>
        <AppBuildingCard name="Расщепитель Альтах" picture="planet_window_bg"/>
    </div>
</template>
<script setup>
import planetStore from "../../store_modules/planetStore.js";
import AppBuildingCard from "./AppBuildingCard.vue";
</script>