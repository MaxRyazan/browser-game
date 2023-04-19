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
            <button class="building_card_btn" @click="planetStore.commit('createBuilding', name)">Построить</button>
            <button class="building_card_btn" @click="planetStore.commit('removeBuilding', building)">Сломать</button>
        </div>
        <div class="molnia"
             @click="planetStore.commit('manageBuilding', building)"
             v-if="building!==undefined && building.buildingType===2 && !building.isFuelLoaded"
        >
            <AppIcon :path="iconsPaths.molnia" :title="`Топливо не загружено в реактор! Нажмите, чтобы загрузить!`"/>
        </div>
        <div class="help_container">
           <AppIcon :path="iconsPaths.help" :small="true" :colored="true" @click="toggleHelp"/>
           <AppIcon :path="iconsPaths.help" :small="true" :colored="true" @click="toggleInfo"/>
        </div>
        <AppProductionStationsInfo :building="building" />
        <transition name="fade">
            <AppBuildingInfo
                    :building="building"
                    :picture="picture"
                    v-if="info"
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
defineProps({
    picture: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    building: {
        type: Object,
        required: false
    },
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
    console.log(info.value)
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
