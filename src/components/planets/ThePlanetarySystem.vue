<template>
    <div class="planetary_system_wrapper">
        <button class="planetary_system_close_button" @click="planetStore.commit('toggleVision', 'planetarySystem')">x</button>
    </div>
</template>

<script setup>
import planetStore from "../../store_modules/planetStore.js";


</script>
