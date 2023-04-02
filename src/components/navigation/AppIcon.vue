<template>
    <div class="top_nav_money_icon" :title="hoverTitle">
        <img :src="path" :class="{small: small, colored: colored}" alt="icon">
    </div>
</template>

<script setup>
defineProps({
    path: {
        type: String,
        required: true
    },
    hoverTitle: {
        type: String,
        required: false
    },
    small: {
        type: Boolean,
        required: false
    },
    colored: {
        type: Boolean,
        required: false
    }
})
</script>
