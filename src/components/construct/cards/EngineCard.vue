<template>
    <div class="ship_card">
        <img :src="`${engine.picture}`" alt="" style="width: 100%; height: 90%;">
        <button style="width: 100px;" @click="chooseEngine">Выбрать</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
import planetStore from "@/store_modules/planetStore.js";
import {PlasmaEngine} from "@/modules/engines/PlasmaEngine";
import tradeStore from "@/store_modules/tradeStore.js";
import {NuclearEngine} from "@/modules/engines/NuclearEngine";
import {RocketEngine} from "@/modules/engines/RocketEngine";
import {SolarSale} from "@/modules/engines/SolarSale";
import shipsStore from "@/store_modules/shipsStore.js";

const props = defineProps(['engine'])
const engine = ref()


const race = tradeStore.state.player.race
switch (props.engine){
    case 'Плазменный двигатель': engine.value = new PlasmaEngine(race)
        break
    case 'Ядерный двигатель': engine.value = new NuclearEngine(race)
        break
    case 'Ракетный двигатель': engine.value = new RocketEngine(race)
        break
    case 'Солнечный парус': engine.value = new SolarSale(race)
        break
}

function chooseEngine(){
    let tonnage = planetStore.state.shipInConstructNow.maxTonnage * shipsStore.state.bonusToTonnage
    planetStore.state.shipInConstructNow.modules.forEach(m => {
        tonnage = tonnage - m.baseParams.moduleMass / shipsStore.state.massEconomy
    })

    if(tonnage >= engine.value.baseParams.moduleMass / shipsStore.state.massEconomy) {
        planetStore.state.shipInConstructNow.modules.push(engine.value)
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