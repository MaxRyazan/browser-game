<template>
    <div class="trade_container_wrapper">
        <div class="trade_container_item title">Игрок</div>
        <div class="trade_container_item title race">Наименование</div>
        <div class="trade_container_item title">Мин. партия</div>
        <div class="trade_container_item title">Количество</div>
        <div class="trade_container_item title">Цена за штуку</div>
        <div class="trade_container_item title">Цена всего лота</div>
        <AppIcon :path="iconsPath.close" @click="mutations.toggleTrade()"/>
    </div>
</template>
<script setup>
import AppIcon from '../navigation/AppIcon.vue'
import iconsPath from "../../iconsPaths.js";
import {Mutations} from "../../js/mutations.js";

const mutations = new Mutations()
</script>