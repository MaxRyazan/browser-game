<template>
    <svg class="svg" :style="{left: svg_left +'px', top: svg_top +'px'}">
        <polyline fill="rgba(43,211,237)" stroke-width="3px" stroke="rgba(43,211,237)" :points="`${polyline_points}`"></polyline>
    </svg>
</template>

<script setup>
defineProps(['svg_left', 'svg_top', 'polyline_points'])
</script>
<style scoped>
.svg{
    position: absolute;
    width: 140px;
    height: 33px
}
</style>
