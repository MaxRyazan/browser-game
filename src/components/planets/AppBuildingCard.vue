<template>
    <div class="building_card">
        <div class="building_name">
            {{name}}
        </div>
        <div class="building_picture">
            <img :src="'../src/assets/images/' + picture+'.jpg'" alt="">
        </div>
        <div class="building_controls">
            <button class="building_card_btn">Построить</button>
            <button class="building_card_btn">Сломать</button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    }
})
</script>
