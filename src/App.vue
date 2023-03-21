<template>
    <RouterView />
</template>

<script setup>
import {onMounted, watch} from "vue";
import {Mutations} from './js/trade/mutations.js'
import tradeStore from "./store_modules/tradeStore.js";
const mutations = new Mutations()

onMounted(() => {
    mutations.removeIdenticalElements()
    // mutations.buildAllModulesList()
})

</script>