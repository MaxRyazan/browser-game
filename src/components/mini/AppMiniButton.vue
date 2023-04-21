<template>
    <button class="planet_navigation_btn"
            :class="{
        circle_right_border: circleRightBorder,
        active:active,
        storage: storage,
        buildings: buildings,
        nav: nav,
        mini: mini,
        medium: medium,
        sp_button: sp_button,
        sp_button_relative: sp_button_relative,
        close_button: close_button
    }"
            :type="type"
    >
        {{name}}
    </button>
</template>

<script setup>
defineProps({
    type: {
      type: String
    },
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
    sp_button:{
      type: Boolean,
      required: false
    },
    medium: {
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
    },
    close_button: {
        type: Boolean,
        required: false
    },
    sp_button_relative: {
        type: Boolean,
        required: false
    }
})
</script>
