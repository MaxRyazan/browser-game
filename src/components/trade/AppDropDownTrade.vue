<template>
    <div class="trade_filters_dropdown" :class="{direction_row: direction_row, direction_column: direction_column}">
        <div class="direction_row">
            <input  type="radio" name="radio" value="" checked @click="$emit('updateValue', '')">
            <label class="">Любая</label>
        </div>
        <div  class="direction_row">
            <input type="radio" name="radio" value="Люди" @click="$emit('updateValue', 'Люди')">
            <label class="humans">Люди</label>
        </div>
        <div  class="direction_row">
            <input  type="radio" name="radio" value="Киборги" @click="$emit('updateValue', 'Киборги')">
            <label class="cyborgs">Киборги</label>
        </div>
        <div  class="direction_row">
            <input type="radio" name="radio" value="Некроны" @click="$emit('updateValue', 'Некроны')">
            <label class="necrons">Некроны</label>
        </div>
    </div>
</template>
<script setup>
defineEmits(['updateValue'])
defineProps(['direction_row', 'direction_column'])
</script>