<template>
    <div class="info_production_stations" v-if="building && (building.buildingType===3 || building.buildingType===4)">
        <div v-for="b in building.canProduce.type" class="line" :key="b">
            <div>{{b.name}}</div>
            <div>{{comp.toFixed(1)}}</div>
        </div>
            <div v-for="ew in building.canProduce.type">
                <div v-for="www in ew.resourcesForProduction">
                    <div>{{www.name}}</div>
                    <div>{{www.amount * building.amount}}</div>
                </div>
            </div>
        <div>{{new Date(building.timeOfLastProduce).toString().slice(4, 24)}}</div>
    </div>
</template>

<script setup>

import {computed} from "vue";

const props = defineProps({
    building: {
        type: Object,
        required: false
    }
})
const comp = computed(() => {
    return props.building.canProduce.amount / props.building.canProduce.type.length * props.building.amount
})
</script>
<style lang="scss">
.info_production_stations{
  position: absolute;
  background-color: white;
  padding: 5px;

}
.line{
  display: flex;
  gap: 20px;
}
</style>
