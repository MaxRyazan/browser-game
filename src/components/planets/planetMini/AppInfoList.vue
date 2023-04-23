<template>
    <div>{{ product.name }}</div>
    <input type="number" ref="amount" @keydown.enter="produce(product.id)">
    <AppMiniButton class="w70" :sp_button="true" name="Запустить" @click="produce(product.id)" />
    <div class="in_progress_time" v-if="count">
        {{count}} x {{variables.productionPower}} мин.
    </div>
</template>

<script setup>
import {computed, ref, watch} from "vue";
import planetStore from "../../../store_modules/planetStore.js";
import AppMiniButton from "../../mini/AppMiniButton.vue";
import variables from "../../../variables";
import tradeStore from "../../../store_modules/tradeStore.js";
const props = defineProps({
    product: {}
})
const amount = ref(0)

function produce(moduleId){
    if(amount.value.value){
        planetStore.commit('createModule', {
            moduleId: moduleId,
            amount: Number(amount.value.value)
        })
        amount.value.value = ''
    }
}

const count = computed(() => {
    let moduleAmount = 0
    if(tradeStore.state.currentPlanet.modulesInCreationNow){
        for(let i = 0; i < tradeStore.state.currentPlanet.modulesInCreationNow.length; i ++){
            if(tradeStore.state.currentPlanet.modulesInCreationNow[i].module.id === props.product.id){
                moduleAmount += tradeStore.state.currentPlanet.modulesInCreationNow[i].amount
            }
        }
    }
    return moduleAmount !== 0 ? moduleAmount : ''
})

</script>

<style scoped>
.w70{
    width: 70px;
}
.in_progress_time{
    position: absolute;
    right: -130px;
}
</style>