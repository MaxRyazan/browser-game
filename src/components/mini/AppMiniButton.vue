<template>
    <button class="planet_navigation_btn" :class="{circle_right_border: circleRightBorder, mini: mini}">{{name}}</button>
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
    }
})
</script>
