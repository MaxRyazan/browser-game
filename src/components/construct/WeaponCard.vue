<template>
    <div class="ship_card">
        <img :src="`${weapon.picture}`" alt="" style="width: 100%; height: 90%;">
        <button style="width: 100px;" @click="chooseWeapon">Выбрать</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
import planetStore from "@/store_modules/planetStore";
import tradeStore from "@/store_modules/tradeStore";
import {Vulcan} from "@/modules/weapons/Vulcan";

const props = defineProps(['weapon'])
const weapon = ref()


const race = tradeStore.state.player.race
switch (props.weapon){
    case 'vulcan': weapon.value = new Vulcan(race)
        break
}

function chooseWeapon(){
    planetStore.state.shipInConstructNow = weapon
}

</script>
<style scoped lang="scss">
.ship_card{
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
</style>