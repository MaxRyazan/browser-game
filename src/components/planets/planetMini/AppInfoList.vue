<template>
    <div>{{b.name}}</div>
    <input type="number" ref="amount">
    <button type="submit" @click="produce(b.id)">Запустить</button>
</template>

<script setup>
import {ref} from "vue";
import planetStore from "../../../store_modules/planetStore.js";

defineProps({
    b:{
        type: Object,
        required: true
    }
})
const amount = ref(0)
function produce(moduleId){
    planetStore.commit('createModule', {
        moduleId: moduleId,
        amount: Number(amount.value.value)
    })
    amount.value.value = ''
}

</script>

<style scoped>

</style>