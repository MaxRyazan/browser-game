<template>
    <div class="top_nav_money_icon" :class="className">
        <img :src="path" alt="icon">
    </div>
</template>

<script setup>
defineProps({
    path: {
        type: String,
        required: true
    },
    className: {
        type: String,
        required: false
    }
})
</script>
