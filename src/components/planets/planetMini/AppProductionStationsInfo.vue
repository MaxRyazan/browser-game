<template>
    <div class="info_production_stations" v-if="building && (building.buildingType===3 || building.buildingType===4)">
        <div v-for="product in building.canProduce.type" class="line" :key="product">
            <div>{{product.name}}</div>
            <div>{{comp.toFixed(1)}}</div>
        </div>
            <div v-for="item in building.canProduce.type">
                <div v-for="innerItem in item.resourcesForProduction">
                    <div>{{innerItem.name}}</div>
                    <div>{{innerItem.amount * building.amount}}</div>
                </div>
            </div>
        <div>{{new Date(building.timeOfLastProduce).toString().slice(4, 24)}}</div>

    </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
    building: {}
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
