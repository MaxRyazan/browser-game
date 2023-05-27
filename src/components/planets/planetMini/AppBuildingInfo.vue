<template>
    <Dialog header="header" :style="{width:'701px',border: '1px solid white', display: 'flex', background: 'black'}">
        <div class="building_info_wrapper" v-if="building && building.buildingType === 6" @keydown.esc="$emit('toggleInfo')">
            <AppMiniButton :close_button="true" :name="`X`" @click="$emit('toggleInfo')"/>
            <AppBuildingInfoDescription :building="building" :picture="picture"/>
            <div>
                <div class="building_info_title">
                    <p>Наименование</p>
                    <p>Количество</p>
                    <p>Управление</p>
                    <p>Всего</p>
                    <p>Таймер</p>
                </div>
                <div class="">
                    <div class="building_info_item" v-for="product in building.canProduce.type" :key="product.id">
                        <AppInfoList :product="product" />
                    </div>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script setup>
import {ref} from "vue";
import AppInfoList from "./AppInfoList.vue";
import AppMiniButton from "../../mini/AppMiniButton.vue";
import AppBuildingInfoDescription from "./AppBuildingInfoDescription.vue";
import Dialog from "primevue/dialog";
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
    if(e.code === 'KeyC'){
       emits('toggleInfo')
    }
}
</script>

