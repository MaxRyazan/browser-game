<template>
    <div v-for="module in filteredModules">
        <div class="module_container">
            <div class="module_size">
                <img :src="module.picture" alt="" class="module_image">
            </div>
            <div :class="mutations.checkRace(module.belongsToRace.name)">{{module.name}}</div>
            <div class="title">{{module.amount}} шт.</div>
        </div>
    </div>
</template>
<script setup>
import {Mutations} from "../../js/mutations.js";
const mutations = new Mutations()
import store from "../../store.js";
import {computed} from "vue";

const filteredModules = computed(() => {

    if (!store.state.newLotFilterRace && !store.state.newLotFilterInput) {
        return store.state.allPlayerModules
    }
    if (store.state.newLotFilterRace && !store.state.newLotFilterInput) {
        console.log(store.state.allPlayerModules)
        return store.state.allPlayerModules.filter(e => e.belongsToRace.name === store.state.newLotFilterRace)
    }
    if(!store.state.newLotFilterRace && store.state.newLotFilterInput) {
        return store.state.allPlayerModules.filter(e => e.name.toLowerCase().includes(store.state.newLotFilterInput.toLowerCase()))
    }
    else {
        return store.state.allPlayerModules.filter(e => e.belongsToRace.name === store.state.newLotFilterRace && e.name.toLowerCase().includes(store.state.newLotFilterInput.toLowerCase()))
    }
})
</script>