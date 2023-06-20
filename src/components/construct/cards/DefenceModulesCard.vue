<template>
    <div class="ship_card">
        <img :src="`${defence.picture}`" alt="" style="width: 100%; height: 90%;">
        <button style="width: 100px;" @click="chooseWeapon">Выбрать</button>
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
.ship_card{
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
</style>