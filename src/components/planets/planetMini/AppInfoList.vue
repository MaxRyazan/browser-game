<template>
    <div>{{b.name}}</div>
    <input type="number" ref="amount">
    <button type="submit" @click="produce(b)">Запустить</button>
</template>

<script setup>
import {ref} from "vue";

defineProps({
    b:{
        type: Object,
        required: true
    }
})
const amount = ref(0)
function produce(module){
    console.log(amount.value.value)
    console.log(module)
    amount.value.value = ''
}
</script>

<style scoped>

</style>