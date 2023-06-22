<template>
    <div class="relative" style="height: 20px;">
        <span v-if="text_max">{{ text_max }}</span>
        <input type="text" :value="`${input_value_max}`" class="readonly_input" readonly v-if="input_value_max">
        <img :src="`./src/assets/icons/${icon_name}`" alt="" style="position: absolute; left: 0; width: 20px;height: 20px" v-if="icon_name"/>
        <span v-if="text_min">{{ text_min }}</span>
        <input type="text" :value="`${input_value_min}`" class="readonly_input" readonly v-if="input_value_min">
        <span v-if="unit_speed">{{ unit_speed }}</span>
    </div>
</template>

<script setup>
defineProps({
    icon_name: {
        type: String,
        required: false
    },
    text_max: {
        type: String
    },
    text_min: {
        type: String
    },
    input_value_max: {
        required: true
    },
    input_value_min: {
        required: true
    },
    unit_speed: {
        required: true
    }
})
</script>
<style scoped lang="scss">
.readonly_input{
  width: 50px;
  height: 20px;
  outline: 0;
  cursor: default;
  color: #daa548;
  background: radial-gradient(ellipse 90% 90%, rgba(5, 45, 51, 0.5), rgba(5, 45, 51, 0.2)) no-repeat, url(@/assets/images/value_bg_blue.png) repeat padding-box;
  border: 1px solid rgba(43, 211, 237, .5);
  text-align: center;
}
</style>