<template>
    <div class="flex base_class" :class="[`flex-${container_flex_direction}`, `justify-content-${justify_container}`]" :style="{'padding': padding}">
        <i class="absolute" :class="`${icon_name}`"></i>
        <component :is="tag_name" class="flex" :class="[`flex-${tag_flex_direction}`, base_yellow && 'base_yellow', base_green && 'base_green']" :style="{color: props.color}">
            <slot />
        </component>
    </div>
</template>

<script setup>
const props = defineProps({
    tag_flex_direction: {
        type: String,
        default: 'row'
    },
    container_flex_direction: {
        type: String,
        default: 'row'
    },
    justify_container: {
        type: String,
        default: 'between'
    },
    color: String,
    icon_name: String,
    tag_name: String,
    padding: String,
    base_yellow: {
        type: Boolean,
        required: false
    },
    base_green: {
        type: Boolean,
        required: false
    },
})
</script>
<style scoped lang="scss">
.base_yellow{
    color: #daa548;
}
.base_green{
  color: #00E000
}
.base_class{
  padding: 2px 5px;
  color: rgba(43, 211, 237)
}
.red {
  color: red;
}
</style>