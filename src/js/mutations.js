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
        return [...store.state.player.playerData.playerPlanets.homeWorld.storage]
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
        return this.removeIdenticalElements(this.getHomeWorldStorage(), this.getOtherPlanetsStorage())
    }


    removeIdenticalElements(arrayOne, arrayTwo){
        for(let i = 0; i < arrayOne.length; i++){
            for(let j = 0; j < arrayTwo.length; j++){
                if(arrayTwo[j].id === arrayOne[i].id && arrayTwo[j].belongsToRace.id === arrayOne[i].belongsToRace.id){
                    arrayTwo.splice(j, 1)
                    arrayOne[i].amount  = arrayOne[i].amount + arrayTwo[j].amount
                }
            }
        }
       return [...arrayOne, ...arrayTwo]
    }

    isIdentical(item1, item2){
        return item1.id === item2.id && item1.belongsToRace.id === item2.belongsToRace.id
    }

    filteredModules (raceFilter, inputFilter, returnedArray) {
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