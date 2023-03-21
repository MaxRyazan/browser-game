<template>
    <div>
        <div class="planet_navigation">
            <AppMiniButton :active="true" :buildings="true" :name="`Инфраструктура`" @click="planetStore.commit('toggleVision', 'infrastructure')"/>
            <AppMiniButton :buildings="true" :name="`Энергетика`" @click="planetStore.commit('toggleVision', 'energy')" />
            <AppMiniButton :buildings="true" :name="`Ресурсы`"  @click="planetStore.commit('toggleVision', 'resources')"/>
            <AppMiniButton :buildings="true" :name="`Материалы`"  @click="planetStore.commit('toggleVision', 'materials')"/>
            <AppMiniButton :buildings="true" :name="`Наука`"  @click="planetStore.commit('toggleVision', 'science')"/>
            <AppMiniButton :buildings="true" :name="`Компоненты КК`"  @click="planetStore.commit('toggleVision', 'components')"/>
        </div>
        <div class="buildings_wrapper">
            <div class="buildings_infrastructure" v-if="planetStore.state.visibilityInfrastructure">
                <AppBuildingCard  name="Колония" picture="colony_icon" />
                <AppBuildingCard  name="Колониальный сенат" picture="planet_window_bg" />
                <AppBuildingCard  name="Склад" picture="planet_window_bg" />
                <AppBuildingCard  name="Административный центр" picture="planet_window_bg" />
                <AppBuildingCard  name="Строительный центр" picture="planet_window_bg" />
                <AppBuildingCard  name="Медицинский центр" picture="planet_window_bg" />
                <AppBuildingCard  name="Города" picture="planet_window_bg" />
                <AppBuildingCard  name="Банк" picture="planet_window_bg" />
                <AppBuildingCard  name="Космопорт" picture="planet_window_bg" />
            </div>
            <div class="buildings_infrastructure" v-if="planetStore.state.visibilityEnergy">
                <AppBuildingCard  name="Солнечная станция" picture="planet_window_bg" />
                <AppBuildingCard  name="Химическая электростанция" picture="planet_window_bg" />
                <AppBuildingCard  name="Ядерная электростанция" picture="planet_window_bg" />
                <AppBuildingCard  name="Расщепитель Альтах" picture="planet_window_bg" />
            </div>
            <div class="buildings_infrastructure" v-if="planetStore.state.visibilityResources">
                <AppBuildingCard  name="Волновая станция" picture="planet_window_bg" />
                <AppBuildingCard  name="Буровая платформа" picture="planet_window_bg" />
                <AppBuildingCard  name="Синтезатор минералов" picture="planet_window_bg" />
            </div>
            <div class="buildings_infrastructure" v-if="planetStore.state.visibilityMaterials">
                <AppBuildingCard  name="Железобетонный завод" picture="planet_window_bg" />
                <AppBuildingCard  name="Рудо-минеральный завод" picture="planet_window_bg" />
                <AppBuildingCard  name="Полимерный завод" picture="planet_window_bg" />
                <AppBuildingCard  name="Химический завод" picture="planet_window_bg" />
                <AppBuildingCard  name="Обогатительный комплекс" picture="planet_window_bg" />
            </div>
            <div class="buildings_infrastructure" v-if="planetStore.state.visibilityScience">
                <AppBuildingCard  name="Научная лаборатория" picture="planet_window_bg" />
                <AppBuildingCard  name="Институт металлов" picture="planet_window_bg" />
                <AppBuildingCard  name="Институт полимеров" picture="planet_window_bg" />
                <AppBuildingCard  name="Институт топлива" picture="planet_window_bg" />
            </div>
            <div class="buildings_infrastructure" v-if="planetStore.state.visibilityComponents">
                <AppBuildingCard  name="Цех сборки двигателей" picture="planet_window_bg" />
                <AppBuildingCard  name="Цех сборки реакторов" picture="planet_window_bg" />
                <AppBuildingCard  name="Цех сборки орудийных систем" picture="planet_window_bg" />
                <AppBuildingCard  name="Цех сборки защитных компонентов" picture="planet_window_bg" />
                <AppBuildingCard  name="Цех сборки добывающих модулей" picture="planet_window_bg" />
            </div>
        </div>
    </div>
</template>

<script setup>
import AppMiniButton from "../mini/AppMiniButton.vue";
import AppBuildingCard from "./AppBuildingCard.vue";
import planetStore from "../../store_modules/planetStore.js";
import {computed, onMounted} from "vue";

onMounted(() => {
    const buttons = document.querySelectorAll('.buildings')
    buttons.forEach(b => b.addEventListener('click', () => {
        buttons.forEach(item => item.style.color = '#00E000')
        b.style.color = '#daa548'
    }))
    document.querySelector('.active').style.color = '#daa548'
})
</script>
