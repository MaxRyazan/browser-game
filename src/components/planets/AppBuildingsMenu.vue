<template>
    <div>
        <div class="planet_navigation">
            <AppMiniButton :active="true" :buildings="true" :name="`Инфраструктура`" @click="planetStore.commit('toggleVision', 'infrastructure')"/>
            <AppMiniButton :buildings="true" :name="`Энергетика`" @click="planetStore.commit('toggleVision', 'energy')" />
            <AppMiniButton :buildings="true" :name="`Ресурсы`"  @click="planetStore.commit('toggleVision', 'resources')"/>
            <AppMiniButton :buildings="true" :name="`Материалы`"  @click="planetStore.commit('toggleVision', 'materials')"/>
            <AppMiniButton :buildings="true" :name="`Наука`"  @click="planetStore.commit('toggleVision', 'science')"/>
            <AppMiniButton :buildings="true" :name="`Компоненты КК`"  @click="planetStore.commit('toggleVision', 'components')"/>
        </div>
        <div class="buildings_wrapper">
            <transition-group name="swap">
                <BuildingsInfrastructure  v-if="planetStore.state.isColonyCreated ||  !planetStore.state.isColonyCreated"/>
                <BuildingsEnergy v-if="planetStore.state.isColonyCreated"/>
                <BuildingsResources v-if="planetStore.state.isColonyCreated"/>
                <BuildingsMaterials v-if="planetStore.state.isColonyCreated"/>
                <BuildingScience v-if="planetStore.state.isColonyCreated"/>
                <BuildingsComponents v-if="planetStore.state.isColonyCreated"/>
            </transition-group>
        </div>
    </div>
</template>
<style lang="scss">
.swap-enter-from,
.swap-leave-to{
  opacity: 0;
  transform: scale(0.1);
}
.swap-enter-active{
  transition: .6s ease;
  position: absolute;
}
.swap-leave-active{
  transition: .6s ease;
  position: absolute;
}

</style>
<script setup>
import AppMiniButton from "../mini/AppMiniButton.vue";
import planetStore from "../../store_modules/planetStore.js";
import {onMounted} from "vue";
import BuildingsInfrastructure from "./BuildingsInfrastructure.vue";
import BuildingsEnergy from "./BuildingsEnergy.vue";
import BuildingsResources from "./BuildingsResources.vue";
import BuildingsMaterials from "./BuildingsMaterials.vue";
import BuildingScience from "./BuildingScience.vue";
import BuildingsComponents from "./BuildingsComponents.vue";

onMounted(() => {
    const buttons = document.querySelectorAll('.buildings')
    buttons.forEach(b => b.addEventListener('click', () => {
        buttons.forEach(item => item.style.color = '#00E000')
        b.style.color = '#daa548'
    }))
    document.querySelector('.active').style.color = '#daa548'
})
</script>
