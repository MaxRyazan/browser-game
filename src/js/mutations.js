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

    getHomeWorldStorage(){
        const storage = []
        for(let i = 0; i< store.state.player.playerData.playerPlanets.homeWorld.storage.length; i++) {
            storage.push(store.state.player.playerData.playerPlanets.homeWorld.storage[i])
        }
        return storage
    }

    getOtherPlanetsStorage(){
        const storage = []
        const playerOtherPlanets = store.state.player.playerData.playerPlanets.inhabitedPlanets
        for(let i = 0; i < playerOtherPlanets.length; i++){
            storage.push(...playerOtherPlanets[i].storage)
        }
        return storage;
    }

    getAllPlayerModules(homeStorage, otherStorage){
        if(homeStorage.length > 0){
            const count = homeStorage.length
            for(let i = 0; i < count; i++){
                for(let j = 0; j < otherStorage.length; j++){
                    if(homeStorage[i].id === otherStorage[j].id){
                        homeStorage[i].amount =  homeStorage[i].amount +  otherStorage[j].amount
                    } else {
                        homeStorage.push(otherStorage[j])
                    }
                }
            }
            return homeStorage
        } else {
            const count = otherStorage.length
            for(let i = 0; i < count; i++){
                for(let j = 0; j < homeStorage.length; j++){
                    if(otherStorage[j].id === homeStorage[i].id){
                        otherStorage[j].amount = otherStorage[j].amount + homeStorage[i].amount
                    } else {
                        otherStorage.push(homeStorage[i])
                    }
                }
            }
        }
        return otherStorage
    }


    filteredModules (raceFilter, inputFilter, returnedArray) {
        if (!raceFilter && !inputFilter) {
            return returnedArray
        }
        if (raceFilter && !inputFilter) {
            return returnedArray.filter(e => e.subject.belongsToRace.name === raceFilter)
        }
        if(!raceFilter && inputFilter) {
            return returnedArray.filter(e => e.name.toLowerCase().includes(inputFilter.toLowerCase()))
        }
        else {
            return returnedArray.filter(e => e.subject.belongsToRace.name === raceFilter && e.name.toLowerCase().includes(inputFilter.toLowerCase()))
        }
    }


    closeConfirmWindow(){
        store.state.confirmWindow = false
    }
}