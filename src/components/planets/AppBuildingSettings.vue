<template>
    <div class="building_settings_modal">
        <button class="close" @click="planetStore.state.buildingsSettingsModal = false">x</button>
        <input name="check" type="checkbox" @click="planetStore.commit('manageBuilding')">
        <label for="check" class="settings_modal_label">Загрузить топливо?</label>
    </div>
</template>

<script setup>
import planetStore from "../../store_modules/planetStore.js";


</script>
