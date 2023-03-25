<template>
    <div class="help_wrapper">
        <ul class="main_help_nav_left">
            <li @click="helpStore.commit('openInfo', 'resourcesInfo')">Ресурсы</li>
            <li>Материалы</li>
            <li>Наземные постройки</li>
            <li>Орбитальные постройки</li>
            <li>Космобаза</li>
            <li>Модули КК</li>
        </ul>
        <div class="main_help_nav_content">
            <div class="help_close_btn">
                <AppMiniButton :name="`x`" @click="helpStore.state.helpMenu = false"/>
            </div>
            <AppResourcesInfo v-if="helpStore.state.resourcesInfo"/>
        </div>
    </div>
</template>

<script setup>
import helpStore from "../../store_modules/helpStore.js";
import AppMiniButton from '../../components/mini/AppMiniButton.vue'
import AppResourcesInfo from '../../components/help/AppResourcesInfo.vue'




</script>
