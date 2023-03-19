import store from "../store.js";

export class Mutations {
    toggleTrade(){
        store.state.showTrade = !store.state.showTrade
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

    getHomeWorldStorage(){
        return [...store.state.player.playerData.playerPlanets.homeWorld.storage]
    }

    changePlayerIGBalance(param){
        store.state.player.playerData.playerMoney.IG += param
    }

    addModuleToPlayerAllModules(module){
        const countOfBuyingModules = module.amount
        module.amount = store.state.confirmWindowInput
        const index =  store.state.allPlayerModules.indexOf(module, 0)
        if(index === -1){
            store.state.allPlayerModules.push(module)
        } else {
            store.state.allPlayerModules[index].amount += countOfBuyingModules
        }
    }

    subtractionBuyingLotAmount(){
        store.state.buyingLot.amount -= store.state.confirmWindowInput
        if(store.state.buyingLot.amount === 0) {
            let index = store.state.allLots.indexOf(store.state.buyingLot)
            store.state.allLots.splice(index, 1)
            // TODO update  allLotsInDB
        }
    }


    clearAndCloseConfirmWindow(){
        store.state.confirmWindowInput = ''
        store.state.confirmWindow = false
    }

    validateDataForBuyModule(sum, minAmount){
        return this.isSumOfBuyValid(sum) && this.isAmountOfBuyValid() && this.checkMinAmountOfBuy(minAmount)
    }

    isSumOfBuyValid(sum){
        return store.state.player.playerData.playerMoney.IG >= sum
    }

    isAmountOfBuyValid(){
        return store.state.buyingLot.amount >= store.state.confirmWindowInput
    }

    checkMinAmountOfBuy(minAmount){
        return store.state.confirmWindowInput % minAmount === 0
    }

    getOtherPlanetsStorage(){
        const storage = []
        const playerOtherPlanets = store.state.player.playerData.playerPlanets.inhabitedPlanets
        for(let i = 0; i < playerOtherPlanets.length; i++){
            storage.push(...playerOtherPlanets[i].storage)
        }
        return storage;
    }

    getAllPlayerModules() {
        this.removeIdenticalElements(this.getHomeWorldStorage(), this.getOtherPlanetsStorage())
    }


    removeIdenticalElements(arrayOne, arrayTwo){
        for(let i = 0; i < arrayOne.length; i++){
            for(let j = 0; j < arrayTwo.length; j++){
                if(arrayTwo[j].id === arrayOne[i].id && arrayTwo[j].belongsToRace.id === arrayOne[i].belongsToRace.id){
                    arrayOne[i].amount = arrayOne[i].amount + arrayTwo[j].amount
                    arrayTwo.splice(j, 1)
                }
            }
        }
       store.state.allPlayerModules =  [...arrayOne, ...arrayTwo]
    }

    isModuleIdentical(item1, item2){
        return item1.id === item2.id && item1.belongsToRace.id === item2.belongsToRace.id
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
        store.state.confirmWindow = false
    }

}