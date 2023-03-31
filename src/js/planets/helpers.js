import tradeStore from "../../store_modules/tradeStore.js";

export default {

    calculateWeightOfThis(param){
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
        //TODO добавить эту проверку к варке ресурсов, модулей и торговле
        console.log(tradeStore.state.currentPlanet.allStorageUnitsMass <  tradeStore.state.currentPlanet.storage.maxCapacity)
        return tradeStore.state.currentPlanet.allStorageUnitsMass <  tradeStore.state.currentPlanet.storage.maxCapacity
    },
}