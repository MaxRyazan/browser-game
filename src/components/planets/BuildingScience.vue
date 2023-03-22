<template>
    <div class="buildings_infrastructure" v-if="planetStore.state.visibilityScience">
        <AppBuildingCard name="Научная лаборатория" picture="planet_window_bg"/>
        <AppBuildingCard name="Институт металлов" picture="planet_window_bg"/>
        <AppBuildingCard name="Институт полимеров" picture="planet_window_bg"/>
        <AppBuildingCard name="Институт топлива" picture="planet_window_bg"/>
    </div>
</template>
<script setup>
import planetStore from "../../store_modules/planetStore.js";
import AppBuildingCard from "./AppBuildingCard.vue";
</script>