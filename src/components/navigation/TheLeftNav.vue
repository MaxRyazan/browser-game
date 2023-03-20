<template>
    <div class="left_nav">
        <div class="left_nav_item">
            <img src="src/assets/images/settings_icon.png" alt="" class="left_nav_item_img">
        </div>
        <div class="left_nav_item">
            <img src="src/assets/images/help_icon.png" alt="" class="left_nav_item_img">
        </div>
        <div class="left_nav_item">
            <img src="src/assets/images/federation_icon.png" alt="" class="left_nav_item_img">
        </div>
        <div class="left_nav_item">
            <img src="src/assets/images/bag_report_item.png" alt="" class="left_nav_item_img">
        </div>
        <div class="left_nav_item">
            <img src="src/assets/images/message_icon.gif" alt="" class="left_nav_item_img">
        </div>
        <div class="left_nav_item">
            <img src="src/assets/images/send_message_icon.png" alt="" class="left_nav_item_img">
        </div>
        <div class="left_nav_item">
            <img src="src/assets/images/chat_icon.png" alt="" class="left_nav_item_img">
        </div>
        <div class="left_nav_item">
            <img src="src/assets/images/diplomacy_icon.png" alt="" class="left_nav_item_img">
        </div>
        <div class="left_nav_item">
            <img src="src/assets/images/map_icon.png" alt="" class="left_nav_item_img">
        </div>
        <div class="left_nav_item">
            <img src="src/assets/images/fleets_icon.png" alt="" class="left_nav_item_img">
        </div>
        <div class="left_nav_item">
            <img src="src/assets/images/battles_icon.png" alt="" class="left_nav_item_img">
        </div>
        <div class="left_nav_item">
            <img src="src/assets/images/battle_logs_icon.png" alt="" class="left_nav_item_img">
        </div>
        <div class="left_nav_item planet" @click="planetStore.commit('togglePlanetMenuVision')">
            <img src="src/assets/images/planet_icon.png" alt="" class="left_nav_item_img">
        </div>
        <div class="left_nav_item">
            <img src="src/assets/images/empire_icon.png" alt="" class="left_nav_item_img">
        </div>
        <div class="left_nav_item">
            <img src="src/assets/images/spy_icon.png" alt="" class="left_nav_item_img">
        </div>
        <div class="left_nav_item">
            <img src="src/assets/images/statistics_icon.png" alt="" class="left_nav_item_img">
        </div>
        <div class="left_nav_item">
            <img src="src/assets/images/organaizer_icon.png" alt="" class="left_nav_item_img">
        </div>
    </div>
</template>

<script setup>
import planetStore from "../../store_modules/planetStore.js";

</script>
