<template>
    <div class="building_info_wrapper" v-if="building && building.buildingType === 6">
        <div class="building_info_description">
            <div class="building_info_picture">
                <img :src="'../../src/assets/images/' + picture +'.jpg'" alt="">
            </div>
            <div class="building_info_name">
                <span>{{building.name}}</span>
            </div>
            <div class="building_info_amount">
                <span>Количество</span>
                <span>{{building.amount}}</span>
            </div>
            <div class="building_info_req_energy">
                <span>Энергия</span>
                <span>{{building.energyNeedToFunctionality * building.amount}}</span>
            </div>
            <div class="building_info_req_people">
                <span>Рабочие</span>
                <span>{{building.peopleNeedToFunctionality * building.amount}}</span>
            </div>
        </div>
        <div class="">
            <div class="building_info_title">
                <p>Наименование</p>
                <p>Количество</p>
            </div>
            <div class="building_info_item">
                <p>Солнечный парус</p>
                <input type="number" ref="engineSail">
            </div>
            <div class="building_info_item">
                <p>Ракетный двигатель</p>
                <input type="number"  ref="engineRocket">
            </div>
            <div class="building_info_item">
                <p>Ядерный двигатель</p>
                <input type="number" ref="engineNuclear">
            </div>
            <div class="building_info_item">
                <p>Нано двигатель</p>
                <input type="number" ref="engineNano">
            </div>
        </div>
     <div class="building_info_button">
        <button type="submit" @click="log">Запустить завод</button>
     </div>
    </div>
</template>

<script setup>
import {ref} from "vue";

const engineSail = ref('')
const engineRocket = ref('')
const engineNuclear = ref('')
const engineNano = ref('')

function log(){
    if(engineSail.value.value.length){
        console.log('produceModule(new SolarSail(player.race, engineSail.value.value)')
    }
    if(engineRocket.value.value.length){
        console.log('produceModule(new RocketEngine(player.race, engineRocket.value.value)')
    }
    if(engineNuclear.value.value.length){
        console.log('produceModule(new NuclearEngine(player.race, engineNuclear.value.value)')
    }
    if(engineNano.value.value.length){
        console.log('produceModule(new NanoSail(player.race, engineNano.value.value)')
    }
}

defineProps({
    building: {
        type: Object,
    },
    picture: {
        type: String,
    }
})

</script>

<style scoped lang="scss">

</style>