<template>
    <Dialog v-model:visible="planetStore.state.isConstructOpen" header="Конструкторское бюро" position="center"
            :style="{ width: '80vw', color: '#daa548', border: '2px solid rgba(43, 211, 237)'}">
        <div class="const_wrapper">

            <div class="const_left">
                <div class="hide_menu corps">
                    <span class="hide_menu-title" @click="toggleHide('corps')">Корпуса</span>
                    <ShipCard shipName="solarConverter"/>
                </div>
                <div class="hide_menu engines h20">
                    <span class="hide_menu-title" @click="toggleHide('engines')">Двигатели</span>
                    <EngineCard engine="Нано двигатель"/>
                    <EngineCard engine="Ядерный двигатель"/>
                    <EngineCard engine="Ракетный двигатель"/>
                    <EngineCard engine="Солнечный парус"/>
                </div>
                <div class="hide_menu modules h20">
                    <span class="hide_menu-title" @click="toggleHide('modules')">Модули</span>
                    <ModulesCard module="mechanicalDrill"/>
                </div>
                <div class="hide_menu weapon h20">
                    <span class="hide_menu-title" @click="toggleHide('weapon')">Орудия</span>
                    <WeaponCard weapon="vulcan"/>
                </div>
                <div class="hide_menu defence h20">
                    <span class="hide_menu-title" @click="toggleHide('defence')">Защитные системы</span>
                    <DefenceModulesCard defence="steelPlate"/>
                </div>
            </div>


            <div class="const_right">
                <div class="proekt_wrapper" v-if="ship">
                    <div class="proekt_info_line">
                        <div class="proekt_image">
                            <img :src="`${ship.picture}`" alt="" style="width: 100%;">
                        </div>
                        <div class="proekt_params">
                            <span>Масса: {{ mass }} кг</span>
                            <span :class="{'red': cargo < 0}">Вместимость: {{ cargo }} ед</span>
                            <span :class="{'red': crew < 0}">Экипаж: {{ crew }}</span>
                            <span>Живучесть: {{ vitality }} ед</span>
                            <span>Сигнатура: {{ signature }} м<sup>3</sup></span>
                            <span :class="{'red': energy < 0}">Энергия: {{ energy }} ед</span>
                            <span>Цена постройки: {{ price }} CR</span>
                        </div>
                    </div>
                    <div class="proekt_slots">
                        <div v-for="slot in ship.modules" :key="slot" :id="`slot${slot}`" class="slot">
                            <img :src="`${slot.picture}`" alt="" v-if="ship.modules.length"
                                 style="width: 45px; height: 45px">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script setup>
import planetStore from "@/store_modules/planetStore.js";
import ShipCard from "@/components/construct/cards/ShipCard.vue";
import EngineCard from "@/components/construct/cards/EngineCard.vue";
import {computed} from "vue";
import ModulesCard from "@/components/construct/cards/ModulesCard.vue";
import WeaponCard from "@/components/construct/cards/WeaponCard.vue";
import DefenceModulesCard from "@/components/construct/cards/DefenceModulesCard.vue";

function toggleHide(param) {
    document.querySelectorAll('.hide_menu').forEach(item => item.classList.add('h20'))
    document.querySelector(`.${param}`).classList.toggle('h20')
}

const ship = computed(() => {
    if (planetStore.state.shipInConstructNow) return planetStore.state.shipInConstructNow
    else return null
})
const price = computed(() => {
    return ship.value.basePriceInCR
})
const mass = computed(() => {
    let mass = ship.value.baseMass;
    if (ship.value.modules) {
        ship.value.modules.forEach(m => {
            mass = mass + m.baseParams.moduleMass
        })
    }
    return mass
})
const cargo = computed(() => {
    let reqCargo = 0;
    let currCargo = ship.value.baseCargo
    if (ship.value.modules) {
        ship.value.modules.forEach(m => {
            currCargo = currCargo + m.bonusParamsToShip.cargo
        })
        ship.value.modules.forEach(m => {
            reqCargo = reqCargo + m.baseParams.requiredCargo
        })
    }
    if(!currCargo){
        currCargo = 0
    }
    return currCargo - reqCargo
})
const crew = computed(() => {
    let reqPeople = 0
    let currPeoples = 0;
    if (ship.value.modules) {
        ship.value.modules.forEach(m => {
            currPeoples = currPeoples + m.baseParams.requiredWorkers
        })
        ship.value.modules.forEach(m => {
            if(m.crew){
                reqPeople = reqPeople + m.bonusParamsToShip.crew
            }
        })
    }
    return reqPeople - currPeoples
})
const vitality = computed(() => {
    let hp = ship.value.baseHP;
    if (ship.value.modules) {
        ship.value.modules.forEach(m => {
            if (m.defenceParams) {
                hp = hp + m.defenceParams.bonusHp
            }
        })
    }
    return hp
})
const signature = computed(() => {
    let sign = ship.value.baseSignature;
    if (ship.value.modules) {
        ship.value.modules.forEach(m => {
            if (m.baseParams) {
                sign = sign + m.baseParams.moduleSignature
            }
        })
    }
    return sign
})
const energy = computed(() => {
    let reqEnergy = 0;
    let produceEnergy = 0;
    if (ship.value.modules) {
        ship.value.modules.forEach(m => {
            if (m.baseParams) {
                reqEnergy = reqEnergy + m.baseParams.requiredEnergy
            }
        })
    }
    if (ship.value.modules) {
        ship.value.modules.forEach(m => {
            if (m.bonusParamsToShip) {
                produceEnergy = produceEnergy + m.bonusParamsToShip.energy
            }
        })
    }
    return produceEnergy - reqEnergy
})
</script>
<style scoped lang="scss">
.proekt_slots {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.slot {
  width: 50px;
  height: 50px;
  border: 2px solid rgba(43, 211, 237);
  background-color: black;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
}

.proekt_params {
  display: flex;
  flex-direction: column;
}

.proekt_image {
  width: 130px;
  height: 130px;
}

.proekt_info_line {
  display: flex;
}

.const_left, .const_right {
  height: 100%;
  width: 50%;
  padding: 3px;
  border: 1px solid rgba(43, 211, 237);
}

.const_left {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.const_wrapper {
  display: flex;
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
    background: radial-gradient(ellipse 90% 90%, rgba(5, 45, 51, 0.5), rgba(5, 45, 51, 0.2)) no-repeat, url(@/assets/images/value_bg_blue.png) repeat padding-box;
    background-size: cover;
    opacity: .5;
  }
}

.hide_menu {
  height: 80%;
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 30px;
  display: flex;
}
.hide_menu-title{
  cursor: pointer;
  padding: 0 10px;
  color: #daa548;
  background: radial-gradient(ellipse 90% 90%, rgba(5, 45, 51, 0.5), rgba(5, 45, 51, 0.2)) no-repeat, url(@/assets/images/value_bg_blue.png) repeat padding-box;
  position: absolute;
  left: 2px;
  top:2px;
  border: 1px solid rgba(43, 211, 237);
  width: 99%;
}
.h20 {
  height: 30px;
}
.red{
  color: red;
}
</style>
