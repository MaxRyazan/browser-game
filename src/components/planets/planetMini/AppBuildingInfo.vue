<template>
    <div class="building_info_wrapper" v-if="building && building.buildingType === 6">
        <AppBuildingInfoDescription :building="building" :picture="picture"/>
        <div>
            <div class="building_info_title">
                <p>Наименование</p>
                <p>Количество</p>
            </div>
            <div class="">
                <div class="building_info_item" v-for="b in building.canProduce.type" :key="b.id" >
                    <AppInfoList :b="b" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import AppInfoList from "./AppInfoList.vue";
import AppBuildingInfoDescription from "./AppBuildingInfoDescription.vue";

let amount = ref(0)
defineProps({
    building: {
        type: Object,
    },
    picture: {
        type: String,
    },
})
</script>

