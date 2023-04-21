<template>
    <div class="building_info_wrapper" v-if="building && building.buildingType === 6" @keydown.esc="$emit('toggleInfo')">
        <AppMiniButton :close_button="true" :name="`X`" @click="$emit('toggleInfo')"/>
        <AppBuildingInfoDescription :building="building" :picture="picture"/>
        <div>
            <div class="building_info_title">
                <p>Наименование</p>
                <p>Количество</p>
            </div>
            <div class="">
                <div class="building_info_item" v-for="product in building.canProduce.type" :key="product.id" >
                    <AppInfoList :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import AppInfoList from "./AppInfoList.vue";
import AppMiniButton from "../../mini/AppMiniButton.vue";
import AppBuildingInfoDescription from "./AppBuildingInfoDescription.vue";

let amount = ref(0)
defineProps({
    building: {},
    picture: {
        type: String,
    },
})
const emits = defineEmits(['toggleInfo'])
window.addEventListener('keydown', press)
function press(e){
    if(e.key === 'Escape'){
       emits('toggleInfo')
    }
}
</script>

