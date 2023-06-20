<template>
    <Dialog v-model:visible="planetStore.state.isConstructOpen" header="construct" position="center"
            :style="{ width: '80vw', background: 'white' }">
        <div class="const_wrapper">
            <div class="const_left">
                <ShipCard shipName="solarConverter"/>
            </div>
            <div class="const_right">
                <div class="proekt_wrapper" v-if="ship">
                    <div class="proekt_info_line">
                        <div class="proekt_image">
                            <img :src="`${ship.picture}`" alt="" style="width: 100%;">
                        </div>
                        <div class="proekt_params">
                            <span>Масса: {{mass}} кг</span>
                            <span>Вместимость: {{cargo}} ед</span>
                            <span>Экипаж: {{crew}}</span>
                            <span>Живучесть: {{vitality}} ед</span>
                            <span>Сигнатура: {{signature}} м<sup>3</sup></span>
                            <span>Энергия: {{energy}} ед</span>
                            <span>Цена постройки: {{price}} CR</span>
                        </div>
                    </div>
                    <div class="proekt_slots">
                        <div v-for="slot in ship.baseModulesSlots" :key="slot" :id="`slot${slot}`" class="slot" @click="clickSlot(slot)">
                            <img src="" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script setup>
import planetStore from "@/store_modules/planetStore.js";
import ShipCard from "@/components/construct/ShipCard.vue";
import {computed} from "vue";
import {AltahReactor} from "@/modules/reactors/AltahReactor";
import tradeStore from "@/store_modules/tradeStore";


function clickSlot(slot){
    const race = tradeStore.state.player.race
    planetStore.state.shipInConstructNow.modules.push(new AltahReactor(race))
    console.log(ship.value)
}

const ship = computed(() => {
    if(planetStore.state.shipInConstructNow) return planetStore.state.shipInConstructNow
    else return null
})
const price = computed(() => {
    return ship.value.basePriceInCR
})
const mass = computed(() => {
    let mass = ship.value.baseMass;
    if(ship.value.modules){
        ship.value.modules.forEach(m => {
            mass = mass + m.baseParams.moduleMass
        })
    }
    return mass
})
const cargo = computed(() => {
    let cargo = ship.value.baseCargo;
    if(ship.value.modules){
        ship.value.modules.forEach(m => {
            cargo = cargo + m.bonusParamsToShip.cargo
        })
    }
    return cargo
})
const crew = computed(() => {
    let peoples;
    if(ship.value.modules){
        ship.value.modules.forEach(m => {
            peoples = peoples + m.baseParams.requiredWorkers
        })
    }
    return peoples ? peoples + ' чел' : 'Беспилотник'
})
const vitality = computed(() => {
    let hp = ship.value.baseHP;
    if(ship.value.modules){
        ship.value.modules.forEach(m => {
            if(m.defenceParams){
                hp = hp + m.defenceParams.bonusHp
            }
        })
    }
    return hp
})
const signature = computed(() => {
    let sign = ship.value.baseSignature;
    if(ship.value.modules){
        ship.value.modules.forEach(m => {
            if(m.baseParams){
                sign = sign + m.baseParams.moduleSignature
            }
        })
    }
    return sign
})
const energy = computed(() => {
    let reqEnergy = 0;
    let produceEnergy = 0;
    if(ship.value.modules){
        ship.value.modules.forEach(m => {
            if(m.baseParams){
                reqEnergy = reqEnergy + m.baseParams.requiredEnergy
            }
        })
    }
    if(ship.value.modules){
        ship.value.modules.forEach(m => {
            if(m.bonusParamsToShip){
                produceEnergy = produceEnergy + m.bonusParamsToShip.energy
            }
        })
    }
    return produceEnergy - reqEnergy
})
</script>
<style scoped lang="scss">
.proekt_slots{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.slot{
  width: 50px;
  height: 50px;
  border: 2px solid rgba(43, 211, 237);
  background-color: black;
  cursor: pointer;
  &:hover{
    transform: scale(1.03);
  }
}
.proekt_params{
  display: flex;
  flex-direction: column;
}
.proekt_image{
  width: 130px;
  height: 130px;
}
.proekt_info_line{
  display: flex;
}
.const_left, .const_right {
  border: 1px solid red;
  height: 100%;
  width: 50%;
  padding: 3px;
}
.const_left{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.const_wrapper {
  display: flex;
  border: 1px solid green;
  height: 800px;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: calc(85vh - 28px);
  &::after {
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    content: "";
    background: url("@/assets/images/backgrounds/sc_bg.jpg") no-repeat center;
    background-size: cover;
    opacity: .5;
  }
}
</style>
