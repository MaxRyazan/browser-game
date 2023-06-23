<template>
    <div class="ship_card">
        <img :src="`${module.picture}`" alt="" style="width: 98px; height: 98px;">
        <div class="ship_card-name" :title="`${module.name}`">{{ module.name }}</div>
        <button class="btn_default" @click="chooseModule">Выбрать</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
import planetStore from "@/store_modules/planetStore.js";
import tradeStore from "@/store_modules/tradeStore.js";
import {MechanicalDrill} from "@/modules/mining/MechanicalDrill";

const props = defineProps(['module'])
const module = ref()


const race = tradeStore.state.player.race
switch (props.module){
    case 'mechanicalDrill': module.value = new MechanicalDrill(race)
        break
}

function chooseModule(){
    if(planetStore.state.shipInConstructNow.modules.length < planetStore.state.shipInConstructNow.maxModules) {
        planetStore.state.shipInConstructNow.modules.push(module.value)
    }
}

</script>
<style scoped lang="scss">

</style>