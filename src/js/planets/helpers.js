import tradeStore from "../../store_modules/tradeStore.js";
import planetStore from "../../store_modules/planetStore.js";
import variables from "../../variables.js";

export default {

    calculateWeightOfThisArray(param){
        let weight = 0;
        if(param.length){
            for(let i = 0; i < param.length; i ++){
                if(param[i].mass){
                    weight += param[i].mass * param[i].amount
                } else {
                    weight += param[i].baseMass * param[i].amount
                }
            }
        }
        return weight
    },

    isStorageNotFull(){
        return tradeStore.state.currentPlanet.allStorageUnitsMass <  tradeStore.state.currentPlanet.storage.maxCapacity
    },

    checkEnergyAndAddBuildingToInProgressNow(building){
        planetStore.commit('checkThatEnergyOnPlanetIsEnough', building)
        if(!tradeStore.state.currentPlanet.isEnergyEnough){
            return  planetStore.commit('sendError', 'Дефицит энергии на планете!!')
        }
        planetStore.commit('build', building)
    },

    subtractCRAndIGForBuild(building){
        const neededCR = building.costInCR
        const neededIG = building.costInIG
        const currentCR = tradeStore.state.player.playerData.playerMoney.CR
        const currentIG = tradeStore.state.player.playerData.playerMoney.IG
        if(neededCR > currentCR || neededIG > currentIG){
            planetStore.commit('sendError', 'Нехватает денег для постройки здания!')
            return false
        } else {
            tradeStore.state.player.playerData.playerMoney.CR -= neededCR
            tradeStore.state.player.playerData.playerMoney.IG -= neededIG
        }
        return true
    },

    checkCrudeOreAndSubtract(stationsId, crudeOreId, count) {
        //TODO  56 строка дописал *count - ПРОВЕРИТЬ РАБОТУ ! ! !
        const storage = tradeStore.state.currentPlanet.storage.resources
        const oreCleaners = tradeStore.state.currentPlanet.buildings.filter(b => b.id === stationsId)[0]
        const crudeOre = storage.filter( r => r.id === crudeOreId)[0]
        if(!crudeOre || crudeOre.amount <= 0){
            return false
        }
        crudeOre.amount = crudeOre.amount - variables.productionPower * oreCleaners.amount * count
        return true
    }
}