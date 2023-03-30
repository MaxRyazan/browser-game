<template>
    <div class="building_settings_modal">
        <button class="close" @click="$emit('closeWindow')">x</button>
        <input name="check" type="checkbox" @click="planetStore.commit('manageBuilding', building)">
        <label for="check" class="settings_modal_label">Загрузить топливо?</label>
    </div>
</template>

<script setup>
import planetStore from "../../store_modules/planetStore.js";
import {Building} from "../../entities/Building.ts";
defineProps({
    building: {
        type: Building,
        required: true
    }
})
defineEmits(['closeWindow'])


</script>
