<template>
    <div class="ship_card">
        <img :src="`${ship.picture}`" alt="" style="width: 98px; height: 98px;">
        <div class="ship_card-name" :title="`${ship.name}`">{{ ship.name }}</div>
        <button class="btn_default" @click="chooseShip">Выбрать</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {ResearchSatellite} from "@/ships/civil/ResearchSatellite";
import planetStore from "@/store_modules/planetStore.js";

const props = defineProps(['shipName'])
const ship = ref()


switch (props.shipName) {
    case 'researchSatellite':
        ship.value = new ResearchSatellite()
        break;
}

function chooseShip() {
    planetStore.state.shipInConstructNow = ship.value
}

</script>
<style scoped lang="scss">

</style>