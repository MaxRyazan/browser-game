<template>
    <div class="building_card">
        <div class="building_name">{{name}}</div>
        <div class="building_picture">
            <img :src="'../src/assets/images/' + picture+'.jpg'" alt="">
        </div>
        <div class="building_amount">
            {{building === undefined ? '' : building.amount}}
        </div>
        <div class="building_settings" v-if="building!==undefined && building.buildingType===2">
            <button v-if="building.id !== 10" @click="openModalWindow">XX</button>
        </div>
        <div class="building_controls">
            <button class="building_card_btn" @click="planetStore.commit('createBuilding', name)">Построить</button>
            <button class="building_card_btn">Сломать</button>
        </div>
        <transition name="fade">
            <AppBuildingSettings
                    :building="building"
                    v-if="building!==undefined && building.buildingType===2 && isOpen"
                    @closeWindow="isOpen=false"
            />
        </transition>
    </div>
    <transition name="fade">
        <AppError v-if="error"/>
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
</style>

<script setup>
import planetStore from "../../store_modules/planetStore.js";
import {Building} from "../../entities/Building.ts";
import AppError from '../mini/AppError.vue'
import AppBuildingSettings from '../planets/AppBuildingSettings.vue'
import {computed, ref, watch} from "vue";
const isOpen = ref(false)
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
        type: Building,
        required: false
    },
})

function openModalWindow(){
    isOpen.value = true
}


function timer(param){
    const timeOfEnd = param + 86400000
    const dateOfEnd = new Date(timeOfEnd)
    return dateOfEnd.getDate() + '/' + (dateOfEnd.getMonth() + 1) + ' - ' + dateOfEnd.getHours() + ':' + dateOfEnd.getMinutes()
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
