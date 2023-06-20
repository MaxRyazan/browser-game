<template>
    <div class="ship_card">
        <img :src="`${ship.picture}`" alt="" style="width: 100%; height: 90%;">
        <button style="width: 100px;" @click="chooseShip">Выбрать</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {SolarHeatConverter} from "@/ships/civil/SolarHeatConverter";
import planetStore from "@/store_modules/planetStore.js";

const props = defineProps(['shipName'])
const ship = ref()


switch (props.shipName){
    case 'solarConverter': ship.value = new SolarHeatConverter()
        console.log(ship.value)
        break
}

function chooseShip(){
    planetStore.state.shipInConstructNow = ship
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