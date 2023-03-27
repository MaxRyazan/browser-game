<template>
    <div class="error_wrapper">
        <span>{{ error }}</span>
    </div>
</template>

<script setup>
import planetStore from "../../store_modules/planetStore.js";
import {computed} from "vue";


const error = computed(() => {
    return  planetStore.state.error.value
})

</script>
