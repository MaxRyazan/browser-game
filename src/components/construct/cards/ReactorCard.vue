<template>
    <div class="ship_card">
        <img :src="`${reactor.picture}`" alt="" style="width: 98px; height: 98px;" :title="`Масса: ${reactor.baseParams.moduleMass} кг`">
        <div class="ship_card-name">{{ reactor.name }}</div>
        <button class="btn_default" @click="chooseEngine">Выбрать</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
import planetStore from "@/store_modules/planetStore.js";
import tradeStore from "@/store_modules/tradeStore.js";
import shipsStore from "@/store_modules/shipsStore.js";
import {ChemicalReactor} from "@/modules/reactors/ChemicalReactor";
import {NuclearReactor} from "@/modules/reactors/NuclearReactor";
import {PlasmaReactor} from "@/modules/reactors/PlasmaReactor";

const props = defineProps(['reactor'])
const reactor = ref()


const race = tradeStore.state.player.race
switch (props.reactor){
    case 'Химический реактор': reactor.value = new ChemicalReactor(race)
        break
    case 'Ядерный реактор': reactor.value = new NuclearReactor(race)
        break
    case 'Плазменный реактор': reactor.value = new PlasmaReactor(race)
        break
}

function chooseEngine(){
    let tonnage = planetStore.state.shipInConstructNow.maxTonnage * shipsStore.state.bonusToTonnage
    planetStore.state.shipInConstructNow.modules.forEach(m => {
        tonnage = tonnage - m.baseParams.moduleMass / shipsStore.state.massEconomy
    })

    if(tonnage >= reactor.value.baseParams.moduleMass / shipsStore.state.massEconomy) {
        planetStore.state.shipInConstructNow.modules.push(reactor.value)
    }
}

</script>
<style scoped lang="scss">
</style>