<template>
    <div class="ship_card">
        <img :src="`${weapon.picture}`" alt="" style="width: 98px; height: 98px;">
        <div class="ship_card-name" :title="`${weapon.name}`">{{ weapon.name }}</div>
        <button class="btn_default" @click="chooseWeapon">Выбрать</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
import planetStore from "@/store_modules/planetStore.js";
import tradeStore from "@/store_modules/tradeStore.js";
import {Vulcan} from "@/modules/weapons/Vulcan";

const props = defineProps(['weapon'])
const weapon = ref()


const race = tradeStore.state.player.race
switch (props.weapon){
    case 'vulcan': weapon.value = new Vulcan(race)
        break
}

function chooseWeapon(){
    if(planetStore.state.shipInConstructNow.modules.length < planetStore.state.shipInConstructNow.maxModules) {
        planetStore.state.shipInConstructNow.modules.push(weapon.value)
    }
}

</script>
<style scoped lang="scss">

</style>