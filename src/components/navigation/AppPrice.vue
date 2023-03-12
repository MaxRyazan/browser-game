<template>
    <div class="top_nav_money_cr">
        <strong class="money_cr_sum">{{sum}}</strong>
        <span class="money_cr_units">{{units}}</span>
        <span :class="currency_type">{{currency}}</span>
    </div>
</template>

<script setup>
defineProps({
    sum: {
        type: Number,
        required: false
    },
    units: {
        type: String,
        default: '',
        required: false
    },
    currency: {
        type: String,
        default: '',
        required: false
    },
    currency_type: {
        type: String,
        required: false
    }
})
</script>
