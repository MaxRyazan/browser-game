<template>
    <div class="top_nav">
        <div class="top_nav_money">
            <AppIcon :path="iconsPath.money" @click="mutations.toggleTrade"/>
            <AppPrice :currency_type="`money_cr_currency`" :sum="store.state.player.playerData.playerMoney.CR" :currency="`CR`"/>
            <AppPrice :currency_type="`money_cr_currency`" :sum="store.state.player.playerData.playerMoney.IG" :currency="`IG`"/>
        </div>
        <div class="top_nav_science">
            <AppIcon :path="iconsPath.science"/>
            <div class="top_nav_science_params">
                <strong class="science_params_search">{{ store.state.player.playerData.playerKnowledge.inLearnNow.tech.name }}</strong>
                <span class="science_params_search_time">
                    {{ mutations.getHours(store.state.player.playerData.playerKnowledge.inLearnNow.ending_at) }} ч.
                    {{ mutations.getMinutes(store.state.player.playerData.playerKnowledge.inLearnNow.ending_at) }} м.
                </span>
            </div>
        </div>
        <div class="top_nav_construct">
            <AppIcon :path="iconsPath.construct"/>
            <div class="top_nav_construct_params">
                <strong class="construct_params_ship">Нет проектирования</strong>
                <span class="construct_params_ship_time">-</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import AppIcon from "./AppIcon.vue";
import AppPrice from "./AppPrice.vue";
import iconsPath from '/src/iconsPaths.js'
import store from "../../store_modules/tradeStore.js";
import {Mutations} from "../../js/trade/mutations.js";
const mutations = new Mutations()


</script>
