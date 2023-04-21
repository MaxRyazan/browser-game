<template>
    <div>{{ product.name }}</div>
    <input type="number" ref="amount" @keydown.enter="produce(product.id)">
    <AppMiniButton class="w70" :sp_button="true" name="Запустить" @click="produce(product.id)" />
</template>

<script setup>
import {ref} from "vue";
import planetStore from "../../../store_modules/planetStore.js";
import AppMiniButton from "../../mini/AppMiniButton.vue";

defineProps({
    product: {}
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
.w70{
    width: 70px;
}
</style>