<template>
    <div v-for="module in mutations.filteredModules(store.state.newLotFilterRace, store.state.newLotFilterInput, store.state.allPlayerModules)">
        <div class="module_container">
            <div class="module_size">
                <img :src="module.picture" alt="" class="module_image">
            </div>
            <div :class="mutations.checkRace(module.subject.belongsToRace.name)">{{module.name}}</div>
            <div class="title">{{module.amount}} шт.</div>
        </div>
    </div>
</template>
<script setup>
import {Mutations} from "../../js/mutations.js";
const mutations = new Mutations()
import store from "../../store.js";

</script>