<template>
    <div v-for="module in mutations.filteredModules(tradeStore.state.newLotFilterRace, tradeStore.state.newLotFilterInput, tradeStore.state.currentPlanet.storage.modules)">
        <div class="module_container">
            <input type="radio" name="choose_module" value="module" @click="chooseModule(module)">
            <div class="module_size">
                <img :src="module.picture" alt="" class="module_image">
            </div>
            <div :class="mutations.checkRace(module.belongsToRace.name)">{{module.name}}</div>
            <div class="title">{{module.amount}} шт.</div>
        </div>
    </div>
</template>
<script setup>
import {Mutations} from "../../js/trade/mutations.js";
const mutations = new Mutations()
import tradeStore from "../../store_modules/tradeStore.js";

function chooseModule(module){
    tradeStore.state.moduleToSold = module

}

</script>