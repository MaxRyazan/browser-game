<template>
    <div class="modules_line_title">
        <div class="modules_line_title_inner double_width">Название</div>
        <div class="modules_line_title_inner amount">Количество</div>
        <div class="modules_line_title_inner amount" v-if="race">Раса</div>
        <div class="modules_line_title_inner mass">Масса ед.</div>
        <div class="modules_line_title_inner">Масса общая</div>
        <div class="modules_line_title_inner settings">Управление</div>
    </div>
</template>
<script setup>

defineProps({
    race: {
        type: Boolean,
        required: false,
    }
})

</script>