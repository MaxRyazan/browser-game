import tradeStore from "../../store_modules/tradeStore.js";
import planetStore from "@/store_modules/planetStore.js";

export class Mutations {
    toggleTrade(){
        tradeStore.state.showTrade = !tradeStore.state.showTrade
    }

    checkRace(race){
        switch (race){
            case "Некроны" : return 'necrons';
            case "Киборги" : return 'cyborgs';
            case "Люди" : return 'humans';
        }
    }
    getHours(param){
        return Math.floor((param - Date.now()) / 1000 / 60 / 60)
    }

    getMinutes(param){
        const millis = (param - Date.now());
        const hours = Math.floor(millis / 1000 / 60 / 60)
        const millisInRest = Math.round(millis - hours * 3600000)
        return Math.round(millisInRest / 1000 / 60)
    }

    checkThatModulesAmountMoreThanZero(array){
        for(let i = 0; i< array.length; i++){
            if(array[i].amount === 0){
                array.splice(i, 1)
            }
        }
    }

    changePlayerIGBalance(param){
        tradeStore.state.player.playerData.playerMoney.IG += param
    }

    addModuleToCurrentPlanetStore(module){
        const currentPlanetStore = tradeStore.state.currentPlanet.storage.modules
        const baseModuleCount = module.amount
        module.amount = tradeStore.state.confirmWindowInput
        const index = currentPlanetStore.indexOf(module, 0)
        if(index === -1){
            currentPlanetStore.push(module)
        } else {
            currentPlanetStore[index].amount += baseModuleCount
        }
    }


    subtractionBuyingLotAmount(){
        tradeStore.state.buyingLot.amount -= tradeStore.state.confirmWindowInput
        if(tradeStore.state.buyingLot.amount === 0) {
            let index = tradeStore.state.allLots.indexOf(tradeStore.state.buyingLot)
            tradeStore.state.allLots.splice(index, 1)
            // TODO update  allLotsInDB
        }
    }


    clearAndCloseConfirmWindow(){
        tradeStore.state.confirmWindowInput = ''
        tradeStore.state.confirmWindow = false
    }

    validateDataForBuyModule(sum, minAmount){
        return this.isSumOfBuyValid(sum) && this.isAmountOfBuyValid() && this.checkMinAmountOfBuy(minAmount)
    }

    isSumOfBuyValid(sum){
        return tradeStore.state.player.playerData.playerMoney.IG >= sum
    }

    isAmountOfBuyValid(){
        return tradeStore.state.buyingLot.amount >= tradeStore.state.confirmWindowInput
    }

    checkMinAmountOfBuy(minAmount){
        return tradeStore.state.confirmWindowInput % minAmount === 0
    }


    removeIdenticalElements(arrayTwo){
        const arrayOne = [...tradeStore.state.player.playerData.playerPlanets.homeWorld.storage.modules]
        arrayTwo = [];
        const playerOtherPlanets = tradeStore.state.player.playerData.playerPlanets.inhabitedPlanets
        for(let i = 0; i < playerOtherPlanets.length; i++){
            arrayTwo.push(...playerOtherPlanets[i].storage.modules)
        }

        for(let i = 0; i < arrayOne.length; i++){
            for(let j = 0; j < arrayTwo.length; j++){
                if(arrayTwo[j].id === arrayOne[i].id && arrayTwo[j].belongsToRace.id === arrayOne[i].belongsToRace.id){
                    arrayOne[i].amount = arrayOne[i].amount + arrayTwo[j].amount
                    arrayTwo.splice(j, 1)
                }
            }
        }
       tradeStore.state.allPlayerModules =  [...arrayOne, ...arrayTwo]
    }

    filteredModules (raceFilter, inputFilter, returnedArray) {
        if (!raceFilter && !inputFilter) {
            return returnedArray
        }
        if (raceFilter && !inputFilter) {
            return returnedArray.filter(e => e.belongsToRace.name === raceFilter)
        }
        if(!raceFilter && inputFilter) {
            return returnedArray.filter(e => e.name.toLowerCase().includes(inputFilter.toLowerCase()))
        }
        else {
            return returnedArray.filter(e => e.belongsToRace.name === raceFilter && e.name.toLowerCase().includes(inputFilter.toLowerCase()))
        }
    }

    tradeLotsFilter(raceFilter, inputFilter, returnedArray) {
        if (!raceFilter && !inputFilter) {
            return returnedArray
        }
        if (raceFilter && !inputFilter) {
            return returnedArray.filter(e => e.subject.belongsToRace.name === raceFilter)
        }
        if(!raceFilter && inputFilter) {
            return returnedArray.filter(e => e.subject.name.toLowerCase().includes(inputFilter.toLowerCase()))
        }
        else {
            return returnedArray.filter(e => e.subject.belongsToRace.name === raceFilter && e.subject.name.toLowerCase().includes(inputFilter.toLowerCase()))
        }
    }


    closeConfirmWindow(){
        tradeStore.state.confirmWindow = false
    }

}