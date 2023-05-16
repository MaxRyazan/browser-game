<template>
    <div class="planet_storage_wrapper">
        <div class="planet_storage_navigation">
            <AppMiniButton :storage="true" name="Ресурсы" @click="toggleShowResources" />
            <AppMiniButton :storage="true"  name="Материалы" @click="toggleShowMaterials" />
            <AppMiniButton :storage="true"  name="Модули" @click="toggleShowModules" />
        </div>

        <div class="planet_storage_modules" v-if="showModules">
            <AppTableTitle :race="true"/>
            <div class="planet_storage_modules_line" v-for="(module, index) in tradeStore.state.currentPlanet.storage.modules" :key="index">
                <img :src="`${module.picture}`" alt="">
                <div class="modules_line">{{module.name}}</div>
                <div class="modules_line module_amount">{{module.amount}}</div>
<!--                <div class="modules_line">{{module.belongsToRace.name}}</div>-->
                <div class="modules_line module_base_mass">{{module.baseParams.moduleMass}}</div>
                <div class="modules_line module_full_mass">{{module.baseParams.moduleMass * module.amount}}</div>
                <div class="modules_line_buttons">
                    <AppMiniButton name="З" :mini="true" />
                    <AppMiniButton name="У" :mini="true" @click="planetStore.commit('removeModule',module)" />
                </div>
            </div>
        </div>

        <div class="planet_storage_modules" v-if="showMaterials">
            <AppTableTitle />
            <div v-for="(material, index) in tradeStore.state.currentPlanet.storage.materials" :key="index">
                <div  class="planet_storage_materials_line" v-if="material.amount > 0">
                    <div class="modules_materials">{{material.name}}</div>
                    <div class="modules_materials">{{mathRound(material.amount)}}</div>
                    <div class="modules_materials">{{material.mass}}</div>
                    <div class="modules_materials">{{mathRound(material.mass * material.amount)}}</div>
                    <div class="modules_line_buttons">
                        <AppMiniButton name="З" :mini="true" />
                        <AppMiniButton name="У" :mini="true" @click="planetStore.commit('removeMaterial',material)" />
                    </div>
                </div>
            </div>
        </div>

        <div class="planet_storage_modules" v-if="showResources">
            <AppTableTitle />
            <div v-for="(resource, index) in tradeStore.state.currentPlanet.storage.resources" :key="index">
                <div  class="planet_storage_materials_line">  <!-- v-if="resource.amount > 0" -->
                    <div class="modules_line">{{resource.name}}</div>
                    <div class="modules_line">{{mathRound(resource.amount)}}</div>
                    <div class="modules_line">{{resource.baseMass}}</div>
                    <div class="modules_line">{{mathRound(resource.baseMass * resource.amount)}}</div>
                    <div class="modules_line_buttons">
                        <AppMiniButton name="З" :mini="true" />
                        <AppMiniButton name="У" :mini="true" @click="planetStore.commit('removeResource', resource)" />
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import tradeStore from "../../store_modules/tradeStore.js";
import planetStore from "../../store_modules/planetStore.js";
import AppMiniButton from "../mini/AppMiniButton.vue";
import {onMounted, onUnmounted, ref} from "vue";
import AppTableTitle from "./planetMini/AppTableTitle.vue";
import variables from "../../variables.js";

const showModules = ref(false)
const showMaterials = ref(false)
const showResources = ref(false)

function hideAll(){
    showModules.value = false
    showMaterials.value = false
    showResources.value = false
    planetStore.state.visibilityBuildingsInProgress = false
}

function mathRound(param){
    return (Number(param)).toFixed(2)
}

function toggleShowModules(){
    hideAll()
    showModules.value = !showModules.value
}
function toggleShowMaterials(){
    hideAll()
    showMaterials.value = !showMaterials.value
}

function toggleShowResources(){
    hideAll()
    showResources.value = !showResources.value
    planetStore.commit('checkAccumulationStationsOfCurrentPlanet')
    planetStore.commit('checkWaveStationsOfCurrentPlanet')
}

const interval = setInterval(() => {
    planetStore.commit('checkAccumulationStationsOfCurrentPlanet')
    planetStore.commit('checkWaveStationsOfCurrentPlanet')
    planetStore.commit('recycleCrudeOreToOre')
    planetStore.commit('recycleCrudeMineralOreToMinerals')
    planetStore.commit('checkReinforcedConcretePlants')
    planetStore.commit('checkOreMineralPlants')
}, variables.oneMinute + 1000)

onMounted(() => {
    const buttons = document.querySelectorAll('.storage')
    buttons.forEach(b => b.addEventListener('click', () => {
        buttons.forEach(item => item.style.color = '#00E000')
        b.style.color = '#daa548'
    }))
})
onUnmounted(() => {
    clearInterval(interval)
})
</script>
