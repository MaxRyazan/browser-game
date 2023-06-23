<template>
    <div class="ship_card">
        <img :src="`${defence.picture}`" alt="" style="width: 98px; height: 98px;">
        <div class="ship_card-name" :title="`${defence.name}`">{{ defence.name }}</div>
        <button class="btn_default" @click="chooseWeapon">Выбрать</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
import planetStore from "@/store_modules/planetStore.js";
import tradeStore from "@/store_modules/tradeStore.js";
import {SteelPlate} from "@/modules/defence/SteelPlate";

const props = defineProps(['defence'])
const defence = ref()


const race = tradeStore.state.player.race
switch (props.defence){
    case 'steelPlate': defence.value = new SteelPlate(race)
        break
}

function chooseWeapon(){
    if(planetStore.state.shipInConstructNow.modules.length < planetStore.state.shipInConstructNow.maxModules){
        planetStore.state.shipInConstructNow.modules.push(defence.value)
    }
}

</script>
<style scoped lang="scss">

</style>