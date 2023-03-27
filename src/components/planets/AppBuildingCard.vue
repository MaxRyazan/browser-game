<template>
    <div class="building_card">
        <div class="building_name">
            {{name}}
        </div>
        <div class="building_picture">
            <img :src="'../src/assets/images/' + picture+'.jpg'" alt="">
        </div>
        <div class="building_amount">
            {{building === undefined ? '' : building.amount}}
        </div>
        <div class="building_controls">
            <button class="building_card_btn" @click="planetStore.commit('createBuilding', name)">Построить</button>
            <button class="building_card_btn">Сломать</button>
        </div>
    </div>
    <AppError v-if="error"/>
</template>

<script setup>
import planetStore from "../../store_modules/planetStore.js";
import {Building} from "../../entities/Building.ts";
import AppError from '../mini/AppError.vue'
import {computed, watch} from "vue";

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
