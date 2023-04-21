<template>
    <div class="building_card">
        <div class="building_name">{{ name }}</div>
        <div class="building_picture">
            <img :src="'../src/assets/images/' + picture +'.jpg'" alt="">
        </div>
        <div class="building_amount">
            {{ building === undefined ? '' : building.amount }}
        </div>
        <div class="building_controls">
            <AppMiniButton
                    name="Построить"
                    :sp_button_relative="true"
                    @click="planetStore.commit('createBuilding', name)"
            />
            <AppMiniButton
                    name="Сломать"
                    :sp_button_relative="true"
                    @click="planetStore.commit('removeBuilding', building)"
            />
        </div>
        <div class="molnia"
             @click="planetStore.commit('manageBuilding', building)"
             v-if="building!==undefined && building.buildingType===2 && !building.isFuelLoaded"
        >
            <AppIcon :path="iconsPaths.molnia" :title="`Топливо не загружено в реактор! Нажмите, чтобы загрузить!`"/>
        </div>
        <div class="help_container">
           <AppIcon :path="iconsPaths.help" :small="true" :colored="true" @click="toggleHelp"/>
           <AppIcon :path="iconsPaths.factorySettingsIcon"  :colored="true" @click="toggleInfo" v-if="building && building.buildingType===6"/>
        </div>
        <AppProductionStationsInfo :building="building" />
        <transition name="fade">
            <AppBuildingInfo
                    :building="building"
                    :picture="picture"
                    v-if="info"
                    @toggleInfo="toggleInfo"
            />
        </transition>
    </div>
    <transition name="fade">
        <AppError v-if="error"/>
    </transition>
    <transition name="help">
        <AppInfo v-if="help" :text="`${buildingInfo}`" @closeHelp="toggleHelp"/>
    </transition>
</template>

<style lang="scss">
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
  transform: scale(0.1);
}
.fade-enter-active,
.fade-leave-active{
  transition: 1s ease;
}

.help-enter-from,
.help-leave-to{
  opacity: 0;
  transform: scale(0.1);
}
.help-enter-active,
.help-leave-active{
  transition: 1s ease;
}


</style>

<script setup>
import planetStore from "../../store_modules/planetStore.js";
import AppError from '../mini/AppError.vue'
import {computed, ref, watch} from "vue";
import AppIcon from "../navigation/AppIcon.vue";
import iconsPaths from "../../iconsPaths.js";
import AppInfo from "../mini/AppInfo.vue";
import AppProductionStationsInfo from '../../components/planets/planetMini/AppProductionStationsInfo.vue'
import AppBuildingInfo from "./planetMini/AppBuildingInfo.vue";
import AppMiniButton from "../mini/AppMiniButton.vue";
defineProps({
    picture: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    building: {},
    buildingInfo: {
        type: String,
        required: false
    }
})
let help = ref(false)
let info = ref(false)

const toggleHelp = () => {
    help.value = !help.value
}

const toggleInfo = () => {
    info.value = !info.value
}

const error = computed(() => {
    return  planetStore.state.error.flag
})

watch(error, (value) => {
    if(value){
        setTimeout(() => {
            planetStore.state.error.flag = false
            planetStore.state.error.value = ''
        }, 1500)
    }
})
</script>
