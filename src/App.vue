<template>
    <RouterView />
</template>

<script setup>
import {onMounted} from "vue";
import {Mutations} from './js/trade/mutations.js'
const mutations = new Mutations()

onMounted(() => {
    mutations.removeIdenticalElements()
})

</script>