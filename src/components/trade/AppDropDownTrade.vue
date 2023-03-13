<template>
    <div class="trade_filters_dropdown">
        <div>
            <input v-model="store.state.tradeFilterRace" type="radio" name="radio" value="" checked>
            <label class="">Любая</label>
        </div>
        <div>
            <input v-model="store.state.tradeFilterRace" type="radio" name="radio" value="Люди">
            <label class="humans">Люди</label>
        </div>
        <div>
            <input v-model="store.state.tradeFilterRace" type="radio" name="radio" value="Киборги">
            <label class="cyborgs">Киборги</label>
        </div>
        <div>
            <input v-model="store.state.tradeFilterRace" type="radio" name="radio" value="Некроны">
            <label class="necrons">Некроны</label>
        </div>
    </div>
</template>
<script setup>
import store from "../../store.js";
</script>