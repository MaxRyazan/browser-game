
<template>
    <div class="building_info_description">
        <div class="building_info_picture">
            <img :src="'../../src/assets/images/' + picture +'.jpg'" alt="">
        </div>
        <div class="building_info_name">
            <span>{{building.name}}</span>
        </div>
        <div class="building_info_amount">
            <span>Количество</span>
            <span>{{building.amount}}</span>
        </div>
        <div class="building_info_req_energy">
            <span>Энергия</span>
            <span>{{building.energyNeedToFunctionality * building.amount}}</span>
        </div>
        <div class="building_info_req_people">
            <span>Рабочие</span>
            <span>{{building.peopleNeedToFunctionality * building.amount}}</span>
        </div>
    </div>
</template>
<script setup>

defineProps({
    building: {
        type: Object
    },
    picture:{
        type: String
    }
})
</script>
