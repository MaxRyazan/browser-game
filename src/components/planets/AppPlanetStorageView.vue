<template>
    <div class="planet_storage_wrapper">
        <div class="planet_storage_navigation">
            <AppMiniButton  name="Ресурсы"/>
            <AppMiniButton  name="Материалы"/>
            <AppMiniButton  name="Модули"/>
        </div>
        <div class="planet_storage_modules">
            <div class="planet_storage_modules_line" v-for="(module, index) in tradeStore.state.currentPlanet.storage.modules" :key="index">
                <div class="modules_line module_id">{{module.id}}</div>
                <div class="modules_line">{{module.name}}</div>
                <div class="modules_line module_amount">{{module.amount}}</div>
                <div class="modules_line">{{module.belongsToRace.name}}</div>
                <div class="modules_line module_base_mass">{{module.baseParams.baseMass}}</div>
                <div class="modules_line module_full_mass">{{module.baseParams.baseMass * module.amount}}</div>
                <div class="modules_line_buttons">
                    <AppMiniButton name="З" :mini="true" />
                    <AppMiniButton name="У" :mini="true" @click="removeModule(module)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import tradeStore from "../../store_modules/tradeStore.js";
import AppMiniButton from "../mini/AppMiniButton.vue";

function removeModule(module){
    let index = -1
    const storage = tradeStore.state.currentPlanet.storage.modules
    for(let i = 0; i < storage.length; i++) {
        if(storage[i].id === module.id && storage[i].belongsToRace.id === module.belongsToRace.id){
            index = i
        }
    }
    storage.splice(index, 1)
}
</script>
