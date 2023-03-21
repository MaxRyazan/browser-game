<template>
    <button class="planet_navigation_btn" :class="{circle_right_border: circleRightBorder, active:active, storage: storage, buildings: buildings, nav: nav, mini: mini}">{{name}}</button>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },
    circleRightBorder: {
        type: Boolean,
        required: false
    },
    mini: {
        type: Boolean,
        required: false
    },
    nav: {
        type: Boolean,
        required: false
    },
    buildings: {
        type: Boolean,
        required: false
    },
    storage: {
        type: Boolean,
        required: false
    },
    active: {
        type: Boolean,
        required: false
    }
})
</script>
