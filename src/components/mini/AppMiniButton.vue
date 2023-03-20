<template>
    <button class="planet_navigation_btn">{{name}}</button>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        required: true
    }
})
</script>
