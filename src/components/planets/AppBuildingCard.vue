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
</template>

<script setup>
import planetStore from "../../store_modules/planetStore.js";
import {Building} from "../../entities/Building.ts";
defineProps({
    picture: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    building: Building
})

</script>
