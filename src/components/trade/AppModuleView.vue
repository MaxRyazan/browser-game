<template>
    <div v-for="module in modules">
        <div class="module_container">
            <div class="module_size">
                <img :src="module.picture" alt="" class="module_image">
            </div>
            <div :class="mutations.checkRace(module.belongsToRace.name)">{{module.name}}</div>
            <div class="title">{{module.amount}} шт.</div>
        </div>
    </div>
</template>
<script setup>

defineProps(['modules'])
import {Mutations} from "../../js/mutations.js";
const mutations = new Mutations()

</script>