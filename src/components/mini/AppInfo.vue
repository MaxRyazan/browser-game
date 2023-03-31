<template>
    <div class="info_wrapper">
        <h4>{{text}}</h4>
        <AppMiniButton @click="$emit('closeHelp')" name="x"/>
    </div>
</template>

<script setup>
import AppMiniButton from "./AppMiniButton.vue";

defineProps({
    text: {
        type: String,
        required: true
    }
})
defineEmits(['closeHelp'])
</script>

<style scoped>

</style>