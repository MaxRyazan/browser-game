<template>
    <div class="planet_navigation">
        <AppMiniButton :nav="true" :name="`Склад`" @click="planetStore.commit('toggleVision', 'storage')" />
        <AppMiniButton :nav="true" :name="`Строительство`" />
        <AppMiniButton :nav="true" :name="`Управление`" />
        <AppMiniButton :nav="true" :name="`Орбитальный док`" :circleRightBorder="true" />
    </div>
</template>

<script setup>
import AppMiniButton from '../mini/AppMiniButton.vue'
import planetStore from "../../store_modules/planetStore.js";
import {onMounted} from "vue";

onMounted(() => {
    const buttons = document.querySelectorAll('.nav')
    buttons.forEach(b => b.addEventListener('click', () => {
        buttons.forEach(item => item.style.color = '#00E000')
        b.style.color = '#daa548'
    }))
})
</script>
