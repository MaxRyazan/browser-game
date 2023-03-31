<template>
    <div class="top_nav_money_icon" :title="hoverTitle">
        <img :src="path" alt="icon">
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
    }
})
</script>
