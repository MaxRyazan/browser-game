<template>
<!--    <div v-for="module in mutations.filteredModules(store.state.newLotFilterRace, store.state.newLotFilterInput, mutations.getAllPlayerModules())">-->
<!--        <div class="module_container">-->
<!--            <div class="module_size">-->
<!--&lt;!&ndash;                <img :src="module.picture" alt="" class="module_image">&ndash;&gt;-->
<!--            </div>-->
<!--&lt;!&ndash;            <div :class="mutations.checkRace(module.subject.belongsToRace.name)">{{module.subject.name}}</div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="title">{{module.amount}} шт.</div>&ndash;&gt;-->
<!--        </div>-->
<!--    </div>-->
</template>
<script setup>
import {Mutations} from "../../js/mutations.js";
const mutations = new Mutations()
import store from "../../store.js";
mutations.getAllPlayerModules()
</script>