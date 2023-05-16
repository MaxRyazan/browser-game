<template>
    <div>{{ product.name }}</div>
    <div class="module_image_info">
        <img :src="`${product.picture}`" alt="" :title="`${product.name}`">
    </div>
    <input type="number" ref="amount" @keydown.enter="produce(product.id)">
    <AppMiniButton class="w70" :sp_button="true" :name="time ? `Добавить` : `Запустить`" @click="produce(product.id)" />
    <div class="in_progress_time" v-if="count">
        <span>{{count}}шт.</span> х <span>{{variables.productionPower}}мин.</span><span>{{time}}</span>
    </div>
</template>

<script setup>
import {computed, onUnmounted, ref, watch} from "vue";
import planetStore from "../../../store_modules/planetStore.js";
import AppMiniButton from "../../mini/AppMiniButton.vue";
import variables from "../../../variables";
import tradeStore from "../../../store_modules/tradeStore.js";
const props = defineProps({
    product: {}
})
const amount = ref(0)
const time = ref()
function produce(moduleId){
    if(amount.value.value){
        planetStore.commit('createModule', {
            moduleId: moduleId,
            amount: Number(amount.value.value)
        })
        amount.value.value = ''
    }
}

function prettyTimer (){
    if(props.product){
        const thisModule = tradeStore.state.currentPlanet.modulesInCreationNow.filter(m => m.module.id === props.product.id)[0]
        if(thisModule){
            console.log('reee')
            console.log('thisModule', thisModule)
            return Math.floor((thisModule.module.willBeCreatedAt - Date.now()) / 1000)
        }
    }
}
const interval = setInterval(() => {
    const res = prettyTimer()
    time.value = res > 0 ? res : 0
}, 1000)

const count = computed(() => {
    let moduleAmount = 0
    if(tradeStore.state.currentPlanet.modulesInCreationNow.length){
        for(let i = 0; i < tradeStore.state.currentPlanet.modulesInCreationNow.length; i ++){
            if(tradeStore.state.currentPlanet.modulesInCreationNow[i].module.id === props.product.id){
                moduleAmount += tradeStore.state.currentPlanet.modulesInCreationNow[i].amount
            }
        }
    }
    return moduleAmount !== 0 ? moduleAmount : ''
})
onUnmounted(() => {
    clearInterval(interval)
})
</script>

<style scoped lang="scss">
.w70{
    width: 70px;
}
.in_progress_time{
    position: absolute;
    right: -160px;
  & span{
    display: inline-block;
    text-align: center;
    width: 30px;
    &:nth-child(3){
      margin-left: 30px;
    }
  }
}
.module_image_info{
  width: 25px;
  position: absolute;
  left: 145px;
  & img{
    width: 100%;
    &:hover{
      transform: scale(1.5);
      transition: .3s linear;
    }
  }
}
</style>