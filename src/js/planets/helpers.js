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
        const storage = tradeStore.state.currentPlanet.storage.resources
        const oreCleaners = tradeStore.state.currentPlanet.buildings.filter(b => b.id === stationsId)[0]
        const crudeOre = storage.filter( r => r.id === crudeOreId)[0]
        if(!crudeOre || crudeOre.amount <= 0){
            return false
        }
        crudeOre.amount = crudeOre.amount - variables.productionPower * oreCleaners.amount * count
        return true
    },

    isResourceEnough(resourceId, resourceAmount, enoughWhere, count){
        const resourceOnStorage = enoughWhere.filter(r => r.id === resourceId)[0]
        if(!resourceOnStorage || resourceOnStorage.amount < resourceAmount * count){
            return false
        }
        return true
    },

    checkResourcesForProductAndSubtract(arrayOfRequiredResourcesForProduce, count) {
        const required = arrayOfRequiredResourcesForProduce
        for(let i = 0; i < required.length; i ++){
            if(!this.isResourceEnough(required[i].resourcesId, required[i].amount, tradeStore.state.currentPlanet.storage.resources, count)) {
               return false;
            }
        }
        const storage = tradeStore.state.currentPlanet.storage.resources
        for(let i = 0; i < storage.length; i ++){
           for(let j = 0; j < required.length; j++){
               if(required[j].resourcesId === storage[i].id){
                   storage[i].amount -= required[j].amount
               }
           }
        }
        return true
    }
}